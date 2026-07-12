(function() {
  // Configuração
  const CONFIG = {
    catalogoUrl: '/monicamelosales-site/catalogo.json',
    corPrimaria: '#C89B3C',
    corFundo: '#232529',
    corTexto: '#F6F4EF',
    mensagemBoasVindas: 'Oi! Sou a assistente da Monica. Posso te ajudar com Reforma Tributária, automação de NFS-e ou agendar um Raio-X da Operação.',
    whatsapp: '5521974196727'
  };

  // Criar shadow DOM para evitar conflitos
  const host = document.createElement('div');
  host.id = 'agente-aiv-host';
  document.body.appendChild(host);

  const shadow = host.attachShadow({ mode: 'open' });

  // HTML do widget
  shadow.innerHTML = `
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }

      #agente-btn {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: ${CONFIG.corPrimaria};
        border: none;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s;
      }

      #agente-btn:hover { transform: scale(1.1); }

      #agente-btn svg { width: 30px; height: 30px; fill: ${CONFIG.corFundo}; }

      #agente-chat {
        position: fixed;
        bottom: 100px;
        right: 20px;
        width: 350px;
        height: 500px;
        background: ${CONFIG.corFundo};
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(0,0,0,0.4);
        display: none;
        flex-direction: column;
        z-index: 9999;
        font-family: 'Inter', sans-serif;
      }

      #agente-chat.aberto { display: flex; }

      #agente-header {
        padding: 16px;
        background: ${CONFIG.corPrimaria};
        border-radius: 12px 12px 0 0;
        color: ${CONFIG.corFundo};
        font-weight: 600;
      }

      #agente-mensagens {
        flex: 1;
        padding: 16px;
        overflow-y: auto;
        color: ${CONFIG.corTexto};
      }

      .mensagem {
        margin-bottom: 12px;
        padding: 10px 14px;
        border-radius: 12px;
        max-width: 80%;
        line-height: 1.4;
        font-size: 14px;
      }

      .mensagem.bot {
        background: rgba(200, 155, 60, 0.1);
        border: 1px solid rgba(200, 155, 60, 0.3);
      }

      .mensagem.usuario {
        background: ${CONFIG.corPrimaria};
        color: ${CONFIG.corFundo};
        margin-left: auto;
      }

      #agente-input {
        padding: 12px;
        border-top: 1px solid rgba(200, 155, 60, 0.2);
        display: flex;
        gap: 8px;
      }

      #agente-input input {
        flex: 1;
        padding: 10px;
        border: 1px solid rgba(200, 155, 60, 0.3);
        border-radius: 8px;
        background: rgba(255,255,255,0.05);
        color: ${CONFIG.corTexto};
        font-size: 14px;
      }

      #agente-input button {
        padding: 10px 16px;
        background: ${CONFIG.corPrimaria};
        color: ${CONFIG.corFundo};
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
      }
    </style>

    <button id="agente-btn" aria-label="Abrir chat">
      <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
    </button>

    <div id="agente-chat">
      <div id="agente-header">Assistente Monica Melo Sales</div>
      <div id="agente-mensagens">
        <div class="mensagem bot">${CONFIG.mensagemBoasVindas}</div>
      </div>
      <div id="agente-input">
        <input type="text" placeholder="Digite sua pergunta..." />
        <button>Enviar</button>
      </div>
    </div>
  `;

  // Lógica
  const btn = shadow.getElementById('agente-btn');
  const chat = shadow.getElementById('agente-chat');
  const mensagens = shadow.getElementById('agente-mensagens');
  const input = shadow.getElementById('agente-input').querySelector('input');
  const enviarBtn = shadow.getElementById('agente-input').querySelector('button');

  btn.addEventListener('click', () => {
    chat.classList.toggle('aberto');
  });

  async function enviarMensagem() {
    const texto = input.value.trim();
    if (!texto) return;

    // Adicionar mensagem do usuário
    const msgUser = document.createElement('div');
    msgUser.className = 'mensagem usuario';
    msgUser.textContent = texto;
    mensagens.appendChild(msgUser);
    input.value = '';

    // Resposta simples (substituir por chamada à API depois)
    setTimeout(() => {
      const msgBot = document.createElement('div');
      msgBot.className = 'mensagem bot';

      if (texto.toLowerCase().includes('raio-x') || texto.toLowerCase().includes('diagnóstico')) {
        msgBot.innerHTML = `O Raio-X da Operação custa R$ 2.000 e é um diagnóstico presencial dos 3 maiores vazamentos da sua operação em R$, com garantia de valor. Quer agendar? <a href="https://wa.me/${CONFIG.whatsapp}" target="_blank" style="color: ${CONFIG.corPrimaria}">Fale no WhatsApp</a>`;
      } else if (texto.toLowerCase().includes('reforma') || texto.toLowerCase().includes('tributária')) {
        msgBot.innerHTML = `A Reforma Tributária 2027 força cada clínica a decidir o regime tributário até 30/set/2026. A janela oficial é de 1º a 30 de setembro. Posso te ajudar com isso — <a href="https://wa.me/${CONFIG.whatsapp}" target="_blank" style="color: ${CONFIG.corPrimaria}">fale com a Monica</a>.`;
      } else if (texto.toLowerCase().includes('preço') || texto.toLowerCase().includes('custo')) {
        msgBot.innerHTML = `Temos 5 produtos: Raio-X (R$ 2.000), Blindagem (R$ 7.000), Inteligência Comercial (R$ 2.500), Acompanhamento (R$ 1.200/mês) e AI Visibility (R$ 4.900). Qual te interessa?`;
      } else {
        msgBot.innerHTML = `Posso te ajudar com Reforma Tributária, automação de NFS-e, Segundo Cérebro Digital ou agendar um Raio-X. Ou se preferir, <a href="https://wa.me/${CONFIG.whatsapp}" target="_blank" style="color: ${CONFIG.corPrimaria}">fale direto com a Monica no WhatsApp</a>.`;
      }

      mensagens.appendChild(msgBot);
      mensagens.scrollTop = mensagens.scrollHeight;
    }, 800);
  }

  enviarBtn.addEventListener('click', enviarMensagem);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') enviarMensagem();
  });
})();
