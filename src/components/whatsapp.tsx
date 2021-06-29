import FloatingWhatsApp from 'react-floating-whatsapp'
import 'react-floating-whatsapp/dist/index.css'
import avatar from '../assets/logo_azul.png'

const WhatsApp = () => {
    return <FloatingWhatsApp phoneNumber='5521982523513' accountName='Andro Consultoria e Assessoria' avatar={avatar} statusMessage='Normalmente responde dentro de 1 hora' chatMessage="Olá! 🤝 Como podemos ajudar?" className="wpp"/>
}

export default WhatsApp;