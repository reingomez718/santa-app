
const selectors = {
  userName: '#input-user-name',
  wish: '#input-wish',
  send: '#button-send',
  statusMessage: '#display-status-message',
};

document.addEventListener('DOMContentLoaded', function() {

  const userNameDOM = document.querySelector(selectors.userName);
  const wishDOM = document.querySelector(selectors.wish);
  const statusMessageDOM = document.querySelector(selectors.statusMessage);

  document.querySelector(selectors.send).addEventListener('click', () => {
    const body = { userName: userNameDOM.value, wish: wishDOM.value };
    fetch('/sendGift', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        statusMessageDOM.innerText = getResultMessage(data.result, body.userName, data.userProfile && data.userProfile.address);
        if (data.result === 'SUCCESS') {
          userNameDOM.value = '';
          wishDOM.value = '';
        }
      });
  });
});

function sendEmail(userName) {

}

function getResultMessage(code, userName, address) {
  switch(code) {
    case 'SUCCESS':
      return `Successfully registered ${userName} and the gifts will be delivered at ${address}`;
    case 'BIRTHDAY_INVALID':
      return `The user ${userName} has an invalid birthday data`;
    case 'USER_UNREGISTERED':
      return `The user ${userName} does not exist`;
    case 'USER_TOO_OLD':
      return `The user ${userName} is too old to receive gifts`;
    case 'USER_EMPTY':
      return 'Please input a user id';
    case 'WISH_EMPTY':
      return `Please input a wish for user ${userName}`;
    default:
      return `An error has occured ${code}`;
  }
}