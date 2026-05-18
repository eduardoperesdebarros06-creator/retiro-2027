const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason
} = require("@whiskeysockets/baileys")

const qrcode = require("qrcode-terminal")

async function startBot() {

  const { state, saveCreds } =
    await useMultiFileAuthState("auth")

  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: false
  })

  sock.ev.on("creds.update", saveCreds)

  sock.ev.on("connection.update", async (update) => {

    const { connection, lastDisconnect, qr } = update

    if (qr) {
      qrcode.generate(qr, { small: true })
    }

    if (connection === "close") {

      const shouldReconnect =
        lastDisconnect?.error?.output?.statusCode !==
        DisconnectReason.loggedOut

      console.log("Conexão fechada.")

      if (shouldReconnect) {
        startBot()
      }

    } else if (connection === "open") {

      console.log("✅ BOT CONECTADO COM SUCESSO!")

    }
  })

  sock.ev.on("messages.upsert", async ({ messages }) => {

    const msg = messages[0]

    if (!msg.message) return

    const texto =
      msg.message.conversation || ""

    const numero = msg.key.remoteJid

    console.log("Mensagem recebida:", texto)

    if (texto.toLowerCase() === "oi") {

      await sock.sendMessage(numero, {
        text:
`Olá! 🙌

Bem-vindo ao Retiro 2027.

Vou te ajudar com sua inscrição.

Para começar, me envie seu nome completo.`
      })
    }
  })
}

startBot()