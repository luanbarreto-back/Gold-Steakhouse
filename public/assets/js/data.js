/* =============================================
   GOLD STEAKHOUSE — data.js
   Base de dados completa do cardápio
   ============================================= */

const CARDAPIO = {

  entradas: [
    {
      id: 'e1',
      nome: 'Batata Rústica',
      desc: 'Palitos de batata fritos no ponto certo, crocantes por fora e macios por dentro. Servidos com aioli da casa.',
      preco: 32,
      img: '../assets/images/entrada-batata.jpeg',
      peso: '300g',
      tempo: '15 min',
    },
    {
      id: 'e2',
      nome: 'Bloomin\' Onion',
      desc: 'Cebola inteira empanada e frita, cortada em flor crocante. Acompanha molho defumado da casa.',
      preco: 45,
      img: '../assets/images/entrada-cebola.jpeg',
      peso: '400g',
      tempo: '20 min',
    },
    {
      id: 'e3',
      nome: 'Bruschetta Caprese',
      desc: 'Pão artesanal tostado com pesto, mozzarella de búfala, tomates frescos e folhas de manjericão.',
      preco: 38,
      img: '../assets/images/entrada-bruschetta.jpeg',
      peso: '220g',
      tempo: '10 min',
    },
    {
      id: 'e4',
      nome: 'Croquetes da Casa',
      desc: 'Croquetes artesanais recheados com costela desfiada e queijo cheddar. 5 unidades.',
      preco: 42,
      img: '../assets/images/entrada-croquete.jpeg',
      peso: '250g',
      tempo: '15 min',
    },
  ],

  executivo: [
    {
      id: 'x1',
      nome: 'Executivo Frango Grelhado',
      desc: 'Filé de frango grelhado com ervas frescas, acompanhado de arroz temperado, salada e sobremesa do dia.',
      preco: 58,
      img: '../assets/images/principal-frango-grelhado.jpeg',
      inclui: 'Prato + Arroz + Salada + Sobremesa do dia',
    },
    {
      id: 'x2',
      nome: 'Executivo Frango Milanesa',
      desc: 'Frango à milanesa dourado com arroz com tomate-cereja, servido com suco natural ou refrigerante.',
      preco: 62,
      img: '../assets/images/principal-frango-milan.jpeg',
      inclui: 'Prato + Arroz + Bebida 300ml',
    },
    {
      id: 'x3',
      nome: 'Executivo Picanha',
      desc: 'Tiras de picanha grelhada na chapa de ferro com farofa de alho, batata frita e vinagrete.',
      preco: 89,
      img: '../assets/images/principal-picanha.jpeg',
      inclui: 'Picanha + Farofa + Batata + Vinagrete',
    },
  ],

  principal: [
    {
      id: 'p1',
      nome: 'Filé Mignon ao Molho',
      desc: 'Medalhões de filé mignon com molho de vinho tinto reduzido, cogumelos salteados e espinafre.',
      preco: 125,
      img: '../assets/images/principal-medalhao.jpeg',
      peso: '350g',
      tempo: '30 min',
    },
    {
      id: 'p2',
      nome: 'Picanha na Chapa',
      desc: 'Picanha nacional fatiada na chapa de ferro, temperada com sal grosso. Batata frita e farofa.',
      preco: 98,
      img: '../assets/images/principal-picanha.jpeg',
      peso: '450g',
      tempo: '25 min',
    },
    {
      id: 'p3',
      nome: 'Costelinha BBQ',
      desc: 'Costelinha suína ao molho barbecue defumado, assada lentamente. Acompanha risoto de açafrão.',
      preco: 115,
      img: '../assets/images/principal-costelinha.jpeg',
      peso: '500g',
      tempo: '40 min',
    },
    {
      id: 'p4',
      nome: 'Filé Mignon com Purê',
      desc: 'Dois medalhões de filé mignon ao ponto, com molho demi-glace e purê cremoso de mandioquinha.',
      preco: 135,
      img: '../assets/images/principal-filemignon.jpeg',
      peso: '380g',
      tempo: '30 min',
    },
    {
      id: 'p5',
      nome: 'Salmão Grelhado',
      desc: 'Filé de salmão grelhado com legumes salteados na manteiga e molho de ervas frescas.',
      preco: 108,
      img: '../assets/images/principal-salmao.jpeg',
      peso: '400g',
      tempo: '25 min',
    },
    {
      id: 'p6',
      nome: 'Frango Grelhado',
      desc: 'Peito de frango grelhado com ervas mediterrâneas, tomate, pepino e batata frita.',
      preco: 72,
      img: '../assets/images/principal-frango-grelhado.jpeg',
      peso: '350g',
      tempo: '20 min',
    },
    {
      id: 'p7',
      nome: 'Frango à Milanesa',
      desc: 'Frango empanado artesanal dourado à perfeição, com arroz e molho especial da casa.',
      preco: 68,
      img: '../assets/images/principal-frango-milan.jpeg',
      peso: '380g',
      tempo: '20 min',
    },
    {
      id: 'p8',
      nome: 'Risoto de Camarão',
      desc: 'Risoto cremoso ao limão-siciliano com camarões grelhados temperados no azeite e tomilho fresco.',
      preco: 118,
      img: '../assets/images/principal-risoto-camarao.jpeg',
      peso: '400g',
      tempo: '30 min',
    },
  ],

  sobremesas: [
    {
      id: 's1',
      nome: 'Taça Royale',
      desc: 'Bolinho quente de chocolate belga com sorvete de creme e calda de caramelo salgado.',
      preco: 38,
      img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80',
    },
    {
      id: 's2',
      nome: 'Macarons Royale',
      desc: 'Creme de baunilha com casquinha de açúcar caramelizado na hora, servido na ramequin.',
      preco: 32,
      img: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600&q=80',
    },
    {
      id: 's3',
      nome: 'Mousse de Morango',
      desc: 'Mousse leve e cremosa de maracujá fresco com calda concentrada da fruta.',
      preco: 28,
      img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80',
    },
    {
      id: 's4',
      nome: 'Brownie',
      desc: 'Brownie quentinho de chocolate amargo com sorvete de baunilha e calda de chocolate.',
      preco: 35,
      img: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=600&q=80',
    },
  ],

  bebidas: [
    // Sucos
    { id: 'b1', nome: 'Limonada com Hortelã', desc: 'Limonada artesanal batida com folhas frescas de hortelã e gelo.', preco: 18, img: '../assets/images/bebida-limonada.jpeg', tipo: 'Suco' },
    { id: 'b2', nome: 'Suco de Laranja', desc: 'Suco de laranja natural espremido na hora, 400ml.', preco: 14, img: '../assets/images/bebida-laranja.jpeg', tipo: 'Suco' },
    { id: 'b3', nome: 'Suco de Morango', desc: 'Suco de morango natural batido, fresquinho e sem conservantes.', preco: 16, img: '../assets/images/bebida-morango.jpeg', tipo: 'Suco' },
    // Águas
    { id: 'b4', nome: 'Água com Gás 500ml', desc: 'Crystal água mineral natural com gás.', preco: 8, img: '../assets/images/bebida-agua-gas.jpeg', tipo: 'Água' },
    { id: 'b5', nome: 'Água sem Gás 500ml', desc: 'Crystal água mineral natural sem gás.', preco: 7, img: '../assets/images/bebida-agua-sem-gas.jpeg', tipo: 'Água' },
    // Drinks
    { id: 'b6', nome: 'Gin Tônica Tanqueray', desc: 'Gin Tanqueray com água tônica premium, gelo e limão siciliano.', preco: 42, img: '../assets/images/bebida-gin.jpeg', tipo: 'Drink' },
    { id: 'b7', nome: 'Caipirinha da Casa', desc: 'Cachaça premium com limão, açúcar e gelo servida em caneca gelada.', preco: 28, img: '../assets/images/bebida-caipirinha.jpeg', tipo: 'Drink' },
    { id: 'b8', nome: 'Aperol Spritz', desc: 'Aperol, prosecco e água com gás com rodela de laranja.', preco: 38, img: '../assets/images/bebida-aperol.jpeg', tipo: 'Drink' },
    // Cervejas
    { id: 'b9', nome: 'Heineken 330ml', desc: 'Cerveja lager premium importada bem gelada.', preco: 16, img: '../assets/images/bebida-heineken.jpeg', tipo: 'Cerveja' },
    { id: 'b10', nome: 'Budweiser 330ml', desc: 'Cerveja americana leve e refrescante, servida gelada.', preco: 14, img: '../assets/images/bebida-budweiser.jpeg', tipo: 'Cerveja' },
    { id: 'b11', nome: 'Corona Extra 330ml', desc: 'Cerveja mexicana com fatia de limão, estilo autêntico.', preco: 18, img: '../assets/images/bebida-corona.jpeg', tipo: 'Cerveja' },
    // Refrigerantes
    { id: 'b12', nome: 'Coca-Cola Lata 350ml', desc: 'Refrigerante de cola sabor original gelado.', preco: 9, img: '../assets/images/bebida-coca.jpeg', tipo: 'Refrigerante' },
    { id: 'b13', nome: 'Guaraná Antarctica 350ml', desc: 'Refrigerante de guaraná original do Brasil, bem gelado.', preco: 8, img: '../assets/images/bebida-guarana.jpeg', tipo: 'Refrigerante' },
  ],
};
