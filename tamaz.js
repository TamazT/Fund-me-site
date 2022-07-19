const connectButton = document.getElementById("connectButton")
connectButton.onclick = connect
function connect() {
    window.ethereum.request({method: "eth_requestAccounts"})
}
