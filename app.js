function card(element) {
    const name = element.parentNode.parentNode.children[0].innerText;
    const prise = element.parentNode.parentNode.children[1].innerText;
    const prise1 = element.parentNode.parentNode.children[1].children[0].innerText;
    const priseNum = parseInt(prise1);
    const tbody = document.getElementById('tbody');
    const total = document.getElementById('total');
    const totalS = total.innerText;
    const totalNum = parseInt(totalS);
    const totalMoney = totalNum + priseNum;
    total.innerText = totalMoney;
    console.log(priseNum)
    const len = tbody.children.length + 1;
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <th>${len}</th>
        <td>${name}</td>
        <td>${prise}</td>
    `;
    tbody.appendChild(tr);
    element.disabled = true;
    element.style.backgroundColor = '#c73452';
    document.getElementById('th').innerText = len;
}