import ChatbotIcon from "./components/ChatbotIcon"

const App = () => {
  return (
    <div className="container">
      <div className="chatbot-popup">
        {/*Chatbot Header */}
        <div className="chatbot-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="div logo-text">Chatbot</h2>
          </div>
          
          <button className="material-symbols-rounded">Keyboard_arrow_down

          </button>
        </div>

          {/*Chatbot body */}
        <div className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">Hey there <br /> How can I help you</p>
          </div>
          <div className="message user-message">
            <ChatbotIcon />
            <p className="message-text">Lorem ipsum dolor sit amet
               consectetur adipisicing elit. Accusamus rerum illo itaque! Porro tempora assumenda temporibus est voluptate facilis inventore nostrum aliquid dolorem enim aut, earum quos ab rem distinctio.</p>
          </div>

        </div>
        {/*Chatbot Footer */}
        <div className="chat-footer">
          <form action="#" className="chat-form">
            <input type="text" placeholder="Message..." className="message-input" required />
            <button className="material-symbols-rounded">arrow_upward

</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
