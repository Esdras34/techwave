// Função para carregar o carrinho do localStorage
function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartUI(cart);
    return cart;
}

// Função para atualizar a UI do carrinho (modal e contagem)
function updateCartUI(cart) {
    const cartCount = document.getElementById('cartCount');
    const cartItemsList = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    cartItemsList.innerHTML = ''; // Limpa a lista de itens

    let total = 0;
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.innerText = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartItemsList.appendChild(listItem);
        total += item.price;
    });

    cartTotal.innerText = total.toFixed(2);
    cartCount.innerText = cart.length; // Atualiza o número de itens no botão
}


// Função para adicionar produto ao carrinho
function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: parseFloat(productPrice) });

    // Salva o carrinho atualizado no localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Atualiza a UI do carrinho
    updateCartUI(cart);
}

// Evento de clique para adicionar o produto ao carrinho
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-name');
        const productPrice = button.getAttribute('data-price');
        addToCart(productName, productPrice);
    });
});

// Abre o modal e exibe os itens do carrinho quando o modal for aberto
document.getElementById('cartModal').addEventListener('show.bs.modal', () => {
    const cart = loadCart(); // Carrega o carrinho
    updateCartUI(cart); // Atualiza a UI do carrinho no modal

    // Exibe um alerta com o total do carrinho ao abrir o modal
    let total = 0;
    cart.forEach(item => total += item.price);
    alert(`O total do carrinho é: R$ ${total.toFixed(2)}`);
});

// Função de finalização de compra (exemplo)
function finalizePurchase() {
    const cart = loadCart();
    
    // Calcula o total do carrinho
    let total = 0;
    cart.forEach(item => total += item.price);

    // Exibe o total no alerta
    alert(`Compra finalizada! O total da sua compra é: R$ ${total.toFixed(2)}`);

    // Aqui você pode redirecionar o usuário para outra página ou realizar uma ação de pagamento
    // Para o exemplo, vou apenas limpar o carrinho
    localStorage.removeItem('cart');
    loadCart();  // Atualiza a interface para refletir o carrinho vazio
}

// Adiciona um evento para o botão de carrinho
document.getElementById('cartButton').addEventListener('click', () => {
    const cart = loadCart(); // Carrega o carrinho
    updateCartUI(cart); // Atualiza a UI do carrinho no modal
});

