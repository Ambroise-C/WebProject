let chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];

function sendMessage(type) {
  const input = document.getElementById('messageInput');
  const message = input.value.trim();
  if (!message) return;

  const newMessage = {
    text: message,
    type: type
  };

  chatHistory.push(newMessage);
  localStorage.setItem("chatHistory", JSON.stringify(chatHistory));

  displayMessage(newMessage);
  input.value = '';
}

function displayMessage({ text, type }) {
  const chatbox = document.getElementById('chatbox');
  const msgDiv = document.createElement('div');
  msgDiv.textContent = text;
  msgDiv.style.margin = '5px 0';
  msgDiv.style.padding = '8px 12px';
  msgDiv.style.borderRadius = '15px';
  msgDiv.style.maxWidth = '70%';
  msgDiv.style.wordWrap = 'break-word';
  msgDiv.style.display = 'inline-block';
  msgDiv.style.color = '#3E5944';

  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';

  if (type === 'donneur') {
    msgDiv.style.backgroundColor = '#e0f0ff';
    wrapper.style.justifyContent = 'flex-start';
  } else {
    msgDiv.style.backgroundColor = '#d4f8d4';
    wrapper.style.justifyContent = 'flex-end';
  }

  wrapper.appendChild(msgDiv);
  chatbox.appendChild(wrapper);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function loadChatHistory() {
  chatHistory.forEach(displayMessage);
}

window.addEventListener("DOMContentLoaded", loadChatHistory);
