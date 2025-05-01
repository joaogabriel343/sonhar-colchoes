
// Sample product data for Sonhar Colchões e Estofados
export interface Product {
  id: number;
  name: string;
  category: 'Colchão' | 'Estofado' | 'Poltrona' | 'Puff';
  image: string;
  images: string[];
  description: string;
  fullDescription: string;
  features: string[];
  specifications: {
    dimensions: string;
    weight: string;
    maxWeight?: string;
    materials: string;
    warranty: string;
  };
  customization?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Super Fofão",
    category: "Estofado",
    image: "https://i.postimg.cc/g2HvTBgm/foto-frente-2.jpg",
    images: [
      "https://i.postimg.cc/g2HvTBgm/foto-frente-2.jpg",
      "https://i.postimg.cc/kXcG33P1/foto-lado.jpg",
      "https://i.postimg.cc/g2HvTBgm/foto-frente-2.jpg"
    ],
    description: "O Super Fofão da foto é um sofá cinza com um design moderno e acolchoado, oferecendo um alto nível de conforto. O sofá tem assentos e encostos bem acolchoados, com costuras que formam quadrados, adicionando um toque de elegância. Ele também possui almofadas adicionais para suporte lombar. O tecido parece ser macio e agradável ao toque, tornando-o uma excelente escolha para salas de estar que buscam combinar estilo e conforto. Ao fundo, há outros móveis e uma propaganda da Orthocrin, indicando que o sofá pode ser parte de uma loja de móveis.",
    fullDescription: "O Super Fofão da foto é um sofá cinza com assentos e encostos acolchoados, proporcionando conforto e estilo. Ele possui um design moderno e é ideal para salas de estar.",
    features: [
      "Cor cinza moderna",
      "Estofado super macio",
      "Almofadas extras confortáveis"
    ],
    specifications: {
      dimensions: "2,50m",
      weight: "",
      maxWeight: "",
      materials: "Alta densidade, molas ensacadas, estofado premium",
      warranty: ""
    },
    customization: [
      "Disponível em tamanhos: Solteiro, Casal, Queen e King",
      "Opção de pillow top destacável",
      "Opção de tecido premium impermeável"
    ]
  },
  {
    id: 2,
    name: "Colchão Pró Hard / Box / Recamier",
    category: "Colchão",
    image: "https://i.postimg.cc/mZJSFHGX/foto-frente.jpg",
    images: [
      "https://i.postimg.cc/mZJSFHGX/foto-frente.jpg",
      "https://i.postimg.cc/KvTD78GZ/foto-lado.jpg",
      "https://i.postimg.cc/KYG7y7nz/foto-ladoe.jpg",
      "https://i.postimg.cc/ZYB8Z5yr/foto-45-d.jpg",
      "https://i.postimg.cc/FHZcGf2Q/foto-45-e.jpg"
    ],
    description: "O conjunto é perfeito para transformar qualquer quarto em um ambiente sofisticado e aconchegante. A Cabeceira Delare, com suas dimensões de 158x198, exibe um design acolchoado e elegante, agregando charme e conforto à cama. O Colchão Pró Hard, também no tamanho 158x198, oferece firmeza e durabilidade, ideal para noites de sono reparador. Complementando a estrutura, o Box de 158x198 proporciona estabilidade e suporte ao colchão. Em frente à cama, o Recamier Reneia de tamanho 158 é uma peça funcional e estilosa, estofada em tecido refinado, perfeita para completar a decoração. Este conjunto reúne beleza, funcionalidade e qualidade para renovar o espaço de descanso com muito estilo.",
    fullDescription: "",
    features: [
      "Sistema retrátil e reclinável",
      "Assento com tecnologia de molas ensacadas",
      "Braços largos e confortáveis",
      "Tecido suede premium resistente a manchas",
      "Base em madeira maciça"
    ],
    specifications: {
      dimensions: "158cm x 198cm ",
      weight: "85kg",
      maxWeight: "Suporta até 450kg",
      materials: "Estrutura de madeira maciça, espuma de alta densidade, molas ensacadas, tecido suede",
      warranty: "5 anos contra defeitos de fabricação"
    },
    customization: [
      "Cabeçeira Delare. Tamanho: 158X198.",
      "Colchão Pró Hard. Tamanho: 158X198.",
      "Box. Tamanho: 158X198.",
      "Recamier Reneia. Tamanho: 158."
    ]
  },
  {
    id: 4,
    name: "Colchão Aurora / Box",
    category: "Colchão",
    image: "https://i.postimg.cc/05wwFXLn/foto-frente.jpg",
    images: [
      "https://i.postimg.cc/05wwFXLn/foto-frente.jpg",
      "https://i.postimg.cc/dVqZ7sDN/foto-cima.jpg",
      "https://i.postimg.cc/W4zDn5GM/foto-baixo.jpg",
      "https://i.postimg.cc/Rh7qFymz/foto-lado.jpg",
      "https://i.postimg.cc/QN1F09Tn/foto-marca.jpg"
    ],
    description: "O Colchão Aurora, com tamanho de 88x188, destaca-se por sua qualidade e conforto, proporcionando noites de sono reparadoras. Ele combina perfeitamente com o Box Baú com Auxiliar, também no tamanho 88x188. Este box traz funcionalidade adicional com seu amplo espaço interno para armazenamento, ideal para manter o quarto organizado, além de incluir um auxiliar que adiciona versatilidade ao conjunto. Essa combinação é uma escolha prática e elegante, perfeita para ambientes compactos que exigem soluções inteligentes sem abrir mão de estilo e conforto.",
    fullDescription: "Colchão de molas ensacadas individualmente com pillow top que proporciona suporte e maciez ideais.",
    features: [
      "Sistema de molas ensacadas independentes",
      "Pillow top com espuma viscoelástica",
      "Tecnologia de regulação térmica",
      "Tratamento antiácaro, antifungo e antibacteriano",
      "Bordas reforçadas com suporte Edge Support System"
    ],
    specifications: {
      dimensions: "88cm x 180cm (Solteiro)",
      weight: "42kg",
      maxWeight: "Suporta até 220kg",
      materials: "O conjunto Colchão Aurora e Box Baú com Auxiliar oferece conforto e praticidade, sendo ideal para otimizar espaços.",
      warranty: "12 anos contra defeitos de fabricação"
    },
    customization: [
      "Colchão Aurora. Tamanho: 88X188. ",
      "Box Bau C/Auxiliar: 88X188."
    ]
  },
  {
    id: 5,
    name: "Estofados Ruby Retrátil",
    category: "Estofado",
    image: "https://i.postimg.cc/8cmPDvdp/foto-lado-esq.jpg",
    images: [
      "https://i.postimg.cc/8cmPDvdp/foto-lado-esq.jpg",
      "https://i.postimg.cc/0yQ2Rbzv/foto-lado.jpg",
      "https://i.postimg.cc/nz8HD20V/foto-tras.jpg",
      "https://i.postimg.cc/mkBBdrv0/foto-detalhada.jpg"
    ],
    description: "Sofá retrátil Estofados Ruby, tamanho 2,5 metros, na cor marrom, com tecido macio e acabamento elegante. Possui uma manta clara como elemento decorativo.",
    fullDescription: "O sofá retrátil Estofados Ruby, de 2,5 metros, é uma peça sofisticada e funcional. Ele apresenta uma cor marrom aconchegante, com tecido de textura macia que combina estilo e conforto. Os assentos são acolchoados e apresentam costuras evidentes, que conferem um design moderno e detalhado. O encosto também é acolchoado, oferecendo ótimo suporte e ideal para relaxamento. O mecanismo retrátil permite ajustar o assento para maior conforto, o que o torna versátil para diferentes momentos de uso. Para dar um toque decorativo. Esta peça é perfeita para complementar ambientes acolhedores e elegantes.",
    features: [
      "Sistema de abertura retrátil",
      "Encosto reclinável",
      "Espuma D33 de alta densidade",
      "Tecido suede premium resistente a manchas"
    ],
    specifications: {
      dimensions: "2,5m",
      weight: "75kg",
      maxWeight: "Suporta até 300kg",
      materials: "Assentos são acolchoados e apresentam costuras evidentes.",
      warranty: "2 anos contra defeitos de fabricação"
    },
    customization: [
      "Sofá retrátil Estofados Ruby, tamanho 2,5 metros",
      "na cor marrom, com tecido macio e acabamento elegante."
    ]
  },
  {
    id: 6,
    name: "Estofados Paris",
    category: "Estofado",
    image: "https://i.postimg.cc/qBxkN8n0/foto-horizontal2.jpg",
    images: [
      "https://i.postimg.cc/qBxkN8n0/foto-horizontal2.jpg",
      "https://i.postimg.cc/9FxCpCJn/foto-frente.jpg",
      "https://i.postimg.cc/g2ndtQ7k/foto-canto.jpg",
      "https://i.postimg.cc/3xVhs9Mj/foto-horizontal.jpg",
      "https://i.postimg.cc/4dbThgYw/foto-tras.jpg"
    ],
    description: "O Estofados Paris é um sofá modular com 03 módulos, projetado para unir conforto e sofisticação. Ele é revestido em um tecido bege claro, de textura suave e acolhedora, que combina facilmente com diferentes estilos de decoração. Os encostos e assentos possuem estofamento generoso com detalhes de capitonê, realçando a estética moderna do móvel. Um dos módulos inclui uma chaise lounge, que proporciona maior funcionalidade, permitindo relaxar ou receber convidados com conforto. A estrutura modular facilita a organização e personalização do ambiente, sendo ideal para salas amplas e elegantes. Este sofá é a escolha perfeita para quem busca estilo e conforto em um só produto.",
    fullDescription: "Sofá modular Estofados Pares, composto por 03 módulos, com acabamento elegante em tecido bege claro e design confortável. Possui um módulo com chaise lounge para maior versatilidade.",
    features: [
      "Sistema de abertura retrátil",
      "Encosto reclinável",
      "Espuma D33 de alta densidade",
      "Tecido suede premium resistente a manchas"
    ],
    specifications: {
      dimensions: "220cm x 110cm ",
      weight: "75kg",
      maxWeight: "Suporta até 300kg",
      materials: "Projetado para unir conforto e sofisticação",
      warranty: "2 anos contra defeitos de fabricação"
    },
    customization: [
      "Disponível em várias estilos"
    ]
  },
  {
    id: 7,
    name: "Estofados Siena",
    category: "Estofado",
    image: "https://i.postimg.cc/2ykNQKvY/foto-frente.jpg",
    images: [
      "https://i.postimg.cc/2ykNQKvY/foto-frente.jpg",
      "https://i.postimg.cc/RCdBSv5Z/foto-frente-2.jpg",
      "https://i.postimg.cc/c4JN6P0M/foto-lado-esq.jpg",
      "https://i.postimg.cc/m26W9Vrx/foto-lado.jpg",
      "https://i.postimg.cc/0NDTLs0x/foto-traas.jpg"
    ],
    description: "O sofá Estofados Siena, com 2,90 metros de largura, é uma peça impressionante que une conforto e sofisticação. Revestido em um tecido bege de tom suave, ele oferece um toque de leveza e elegância para qualquer ambiente. O design apresenta costura capitonê, formando padrões de losangos nos assentos e encostos, que ressaltam o estilo moderno e refinado do móvel. A estrutura ampla proporciona espaço generoso, ideal para acomodar a família ou receber convidados. Como complemento, o sofá vem com duas almofadas cilíndricas, que acrescentam charme e funcionalidade, podendo ser usadas como apoio adicional. Combinando funcionalidade e estética, o Estofados Siena é perfeito para transformar salas em espaços acolhedores e requintados.",
    fullDescription: "Sofá Estofados Siena, tamanho 2,90 metros, com design elegante em tecido bege acolhedor e costura capitonê. Acompanha almofadas cilíndricas como detalhe decorativo.",
    features: [
      "Sistema de abertura retrátil",
      "Encosto reclinável",
      "Espuma D33 de alta densidade",
      "Tecido suede premium resistente a manchas"
    ],
    specifications: {
      dimensions: "290cm",
      weight: "75kg",
      maxWeight: "Suporta até 300kg",
      materials: "Design elegante em tecido bege acolhedor",
      warranty: "2 anos contra defeitos de fabricação"
    },
    customization: [
      "Disponível em várias cores"
    ]
  },
  {
    id: 8,
    name: "Poltrona Costela De Adão",
    category: "Poltrona",
    image: "https://i.postimg.cc/mgMprSzy/foto-frente.jpg",
    images: [
      "https://i.postimg.cc/mgMprSzy/foto-frente.jpg",
      "https://i.postimg.cc/qRB1jVm1/foto-cima.jpg",
      "https://i.postimg.cc/vmbhZwdG/foto-lado.jpg",
      "https://i.postimg.cc/CMQcH2b4/foto-cima-2.jpg",
      "https://i.postimg.cc/85nm4FfC/foto-tras-2.jpg"
    ],
    description: "A Poltrona Costela de Adão é uma peça única e sofisticada, ideal para complementar ambientes modernos e contemporâneos. Sua estrutura é composta por um elegante esqueleto de madeira, projetado com um design curvo que lembra a forma de uma folha de costela de adão, trazendo um toque natural ao espaço. As almofadas, revestidas em tecido claro com acabamento detalhado, são acolchoadas e encaixam-se perfeitamente na estrutura, garantindo o máximo conforto. A poltrona apresenta detalhes de costura visíveis e bordas em tom contrastante, conferindo um charme adicional ao visual. É a escolha perfeita para quem busca uma peça de mobília que combina estilo, conforto e personalidade.",
    fullDescription: "Poltrona Costela de Adão com design icônico e estrutura de madeira, acompanhada de almofadas estofadas em tecido claro, realçando o conforto e a elegância.",
    features: [
      "Sistema de abertura retrátil",
      "Encosto reclinável",
      "Espuma D33 de alta densidade",
      "Tecido suede premium resistente a manchas"
    ],
    specifications: {
      dimensions: "",
      weight: "75kg",
      maxWeight: "Suporta até 300kg",
      materials: "Estrutura de madeira, acompanhada de almofadas estofadas em tecido.",
      warranty: "2 anos contra defeitos de fabricação"
    },
    customization: [
      "Disponível em várias cores",
      
    ]
  },
  {
    id: 9,
    name: "Poltrona Decorativa",
    category: "Poltrona",
    image: "https://i.postimg.cc/sfqtDxHy/foto-frente.jpg",
    images: [
      "https://i.postimg.cc/sfqtDxHy/foto-frente.jpg",
      "https://i.postimg.cc/N0snPHF8/foto-cima.jpg",
      "https://i.postimg.cc/tJxvVdvb/foto-lado-esq.jpg",
      "https://i.postimg.cc/s2gnJCHw/foto-pe.jpg",
      "https://i.postimg.cc/Y94bJfHF/foto-tras.jpg"
    ],
    description: "A Poltrona Decorativa é um mobiliário de design sofisticado e funcional, ideal para diversos ambientes. Revestida em tecido bege claro, sua textura é aconchegante e combina com diferentes estilos de decoração. Os braços e os pés, feitos de madeira em tom escuro, têm um formato levemente curvado, trazendo um contraste elegante ao design geral. A combinação do assento acolchoado com o encosto amplo oferece excelente conforto, tornando-a perfeita para momentos de relaxamento. Este móvel é uma escolha ideal para criar um espaço acolhedor e estiloso em salas, quartos ou até mesmo escritórios.",
    fullDescription: "Poltrona Decorativa com design elegante, revestida em tecido bege claro, com braços e pés de madeira em tom escuro, oferecendo sofisticação e conforto.",
    features: [
      "Sistema de abertura retrátil",
      "Encosto reclinável",
      "Espuma D33 de alta densidade",
      "Tecido suede premium resistente a manchas"
    ],
    specifications: {
      dimensions: "220cm x 110cm x 90cm",
      weight: "75kg",
      maxWeight: "Suporta até 300kg",
      materials: "Poltrona Decorativa com design elegante, revestida em tecido bege claro, com braços e pés de madeira.",
      warranty: "2 anos contra defeitos de fabricação"
    },
    customization: [
      "Disponível em várias cores",
      
    ]
  },
  {
    id: 10,
    name: "Poltrona Palermo",
    category: "Poltrona",
    image: "https://i.postimg.cc/tRxBk5DQ/foto-frente.jpg",
    images: [
      "https://i.postimg.cc/tRxBk5DQ/foto-frente.jpg",
      "https://i.postimg.cc/K8ZQZybx/foto-baixo.jpg",
      "https://i.postimg.cc/Cxm756MD/foto-cima.jpg",
      "https://i.postimg.cc/25ywZF3t/foto-pe.jpg",
      "https://i.postimg.cc/prbY4wkN/foto-tras.jpg"
    ],
    description: "A Poltrona Palermo é uma peça decorativa que combina conforto e sofisticação em um design moderno. Seu revestimento em tecido bege de textura suave traz uma sensação de aconchego, enquanto sua estrutura robusta oferece durabilidade e estabilidade. Os pés de madeira em tom escuro contrastam harmoniosamente com o estofado, conferindo um toque de elegância ao móvel. O assento acolchoado e o encosto levemente curvado garantem conforto durante o uso. Versátil e estilosa, a Poltrona Palermo é ideal para complementar salas de estar, escritórios ou espaços de leitura, agregando charme e funcionalidade ao ambiente.",
    fullDescription: "Poltrona Palermo com design moderno, revestida em tecido bege, estrutura robusta e pés de madeira escura, ideal para compor ambientes elegantes.",
    features: [
      "Sistema de abertura retrátil",
      "Encosto reclinável",
      "Espuma D33 de alta densidade",
      "Tecido suede premium resistente a manchas"
    ],
    specifications: {
      dimensions: "",
      weight: "75kg",
      maxWeight: "Suporta até 300kg",
      materials: "Poltrona Palermo com design moderno, revestida em tecido bege.S",
      warranty: "2 anos contra defeitos de fabricação"
    },
    customization: [
      "Disponível em várias cores",
      
    ]
  },
  {
    id: 11,
    name: "Puff Moriá",
    category: "Puff",
    image: "https://i.postimg.cc/vZH7JL7m/foto-lado.jpg",
    images: [
      "https://i.postimg.cc/vZH7JL7m/foto-lado.jpg",
      "https://i.postimg.cc/jjBznppW/foto-detalhe.jpg",
      "https://i.postimg.cc/j24N9LLN/foto-tudo.jpg",
      "https://i.postimg.cc/Dz4GhCS7/foto-lado-2.jpg",
      "https://i.postimg.cc/8PCjDyYx/foto-atras.jpg"
    ],
    description: "O Puff Moriá é uma peça de mobiliário com design moderno e elegante, ideal para complementar qualquer ambiente. Ele possui revestimento em tecido bege claro de textura macia, que traz uma sensação de aconchego e combina facilmente com diversos estilos de decoração. A estrutura é acolchoada, proporcionando conforto tanto para uso funcional quanto como elemento decorativo. Seus pés, feitos de madeira em tom natural, destacam o visual e garantem estabilidade. Compacto e versátil, o Puff Moriá é perfeito para salas de estar, quartos ou até mesmo escritórios, agregando charme e funcionalidade ao espaço.",
    fullDescription: "Puff Moriá com design contemporâneo, revestido em tecido bege claro, estrutura confortável e pés de madeira, perfeito para decorar e relaxar.",
    features: [
      "Sistema de abertura retrátil",
      "Encosto reclinável",
      "Espuma D33 de alta densidade",
      "Tecido suede premium resistente a manchas"
    ],
    specifications: {
      dimensions: "",
      weight: "75kg",
      maxWeight: "Suporta até 300kg",
      materials: "Puff Moria com design contemporâneo, revestido em tecido bege claro",
      warranty: "2 anos contra defeitos de fabricação"
    },
    customization: [
      "Disponível em várias cores",
      
    ]
  },
  {
    id: 12,
    name: "Puff Floral",
    category: "Puff",
    image: "https://i.postimg.cc/XJ8Y6FkV/foto-1.jpg",
    images: [
      "https://i.postimg.cc/XJ8Y6FkV/foto-1.jpg",
      "https://i.postimg.cc/6qb6yXPg/foto-2.jpg",
      "https://i.postimg.cc/wT3Tn1yp/foto-3.jpg",
      "https://i.postimg.cc/3wQ8y9L8/foto-4.jpg",
      "https://i.postimg.cc/sDBswbqf/foto-5.jpg",
      "https://i.postimg.cc/YqJkVbB6/foto-5-2.jpg",
      "https://i.postimg.cc/tgbbRJT7/foto-6.jpg",
      "https://i.postimg.cc/GppCTNF1/foto-7.jpg",
      "https://i.postimg.cc/d1kc4yNH/foto-8.jpg",
    ],
    description: "O Puff Floral é uma peça charmosa e funcional, perfeita para trazer mais cor e estilo ao ambiente. Sua estampa floral vibrante combina tons de amarelo, azul, vermelho, rosa e verde, criando um visual alegre e descontraído. O tecido é de textura macia e confortável, tornando-o ideal para uso diário. Sua estrutura acolchoada oferece conforto, enquanto o design compacto facilita sua integração em diferentes espaços, como salas de estar, quartos ou escritórios. Além de funcional, o Puff Floral também é um elemento decorativo versátil, perfeito para quem busca destacar o ambiente com uma peça marcante e cheia de vida.",
    fullDescription: "Puff Floral com estampa vibrante e colorida, ideal para decorar ambientes com um toque de alegria e personalidade.",
    features: [
      "Sistema de abertura retrátil",
      "Encosto reclinável",
      "Espuma D33 de alta densidade",
      "Tecido suede premium resistente a manchas"
    ],
    specifications: {
      dimensions: "",
      weight: "75kg",
      maxWeight: "Suporta até 300kg",
      materials: "Puff Floral com estampa vibrante e colorida, ideal para decorar ambientes com um toque de alegria",
      warranty: "2 anos contra defeitos de fabricação"
    },
    customization: [
      "Disponível, algumas unidades.",
      
    ]
  },
  {
    id: 13,
    name: "Puff Thor Durango",
    category: "Puff",
    image: "https://i.postimg.cc/dV5MFBzN/foto-lado.jpg",
    images: [
      "https://i.postimg.cc/dV5MFBzN/foto-lado.jpg",
      "https://i.postimg.cc/QCGwmnTC/foto-lado-2.jpg",
      "https://i.postimg.cc/66nDqwkv/foto-cima.jpg",
      "https://i.postimg.cc/02CFGn25/foto-cima-2.jpg",
      "/images/produtos/puff-tlior/foto-detalhada.jpg",
      "https://i.postimg.cc/Hs55Fv7H/foto-pe.jpg"
    ],
    description: "O Sofá Retrátil Confort é perfeito para quem busca elegância e conforto em um só produto...",
    fullDescription: "Thor Durango com design elegante, revestido em tecido bege escuro, estrutura compacta e pés de madeira escura, ideal para decoração funcional.",
    features: [
      "Sistema de abertura retrátil",
      "Encosto reclinável",
      "Espuma D33 de alta densidade",
      "Tecido suede premium resistente a manchas"
    ],
    specifications: {
      dimensions: "",
      weight: "75kg",
      maxWeight: "Suporta até 300kg",
      materials: "Thor Durango com design elegante, revestido em tecido bege escuro, estrutura compacta.",
      warranty: "2 anos contra defeitos de fabricação"
    },
    customization: [
      "Disponível, alguns em estoque.",
      
    ]
  },
  {
    id: 14,
    name: "Super Fofão Duplo Molejo",
    category: "Estofado",
    image: "https://i.postimg.cc/mgnsMj8z/foto-frente.jpg",
    images: [
      "https://i.postimg.cc/mgnsMj8z/foto-frente.jpg",
      "https://i.postimg.cc/fyMnZrTF/foto-frente-2.jpg",
      "https://i.postimg.cc/YqnKK8cn/foto-detalhada.jpg",
      "https://i.postimg.cc/D05VzPSz/foto-detalhada-2.jpg",
      "https://i.postimg.cc/j2x9BnMY/foto-lado.jpg",
      "https://i.postimg.cc/28XJX6vg/foto-lado-2.jpg",
    ],
    description: "O Super Fofão Duplo Malep, com impressionantes 2,90 metros, é uma peça de mobiliário projetada para oferecer conforto e estilo. Seu design espaçoso e acolchoado é perfeito para momentos de relaxamento, acomodando toda a família com facilidade. Revestido em tecido bege claro de textura suave, ele traz uma sensação de aconchego e combina com diferentes estilos de decoração. Sua estrutura ampla garante estabilidade e durabilidade, tornando-o ideal para o uso diário. Versátil e elegante, o Super Fofão Duplo Malep é a escolha ideal para transformar sua sala em um ambiente convidativo e sofisticado.",
    fullDescription: "Super Fofão Duplo Malep, tamanho 2,90 metros, com design confortável e amplo, revestido em tecido macio bege claro e estrutura estável.",
    features: [
      "Sistema de abertura retrátil",
      "Encosto reclinável",
      "Espuma D33 de alta densidade",
      "Tecido suede premium resistente a manchas"
    ],
    specifications: {
      dimensions: "290cm",
      weight: "75kg",
      maxWeight: "Suporta até 300kg",
      materials: "Super Fofão Duplo Malep, tamanho 2,90 metros, com design confortável e amplo.",
      warranty: "2 anos contra defeitos de fabricação"
    },
    customization: [
      "Disponível em várias cores",
      
    ]
  },
  {
    id: 15,
    name: "Puff Pelucia",
    category: "Puff",
    image: "https://i.postimg.cc/4xV5bN16/foto-frente.jpg",
    images: [
      "https://i.postimg.cc/4xV5bN16/foto-frente.jpg",
      "https://i.postimg.cc/8CGbyQyq/foto-frente-2.jpg",
      "https://i.postimg.cc/QMqJw4wV/foto-lado.jpg",
      "https://i.postimg.cc/Y07G7MFH/foto-cima.jpg",
      "https://i.postimg.cc/8CGbyQyq/foto-frente-2.jpg",
      "https://i.postimg.cc/pTG4bX49/foto-pe.jpg",
    ],
    description: "O Puff Pelúcia é um elemento decorativo e funcional que une conforto e charme. Revestido com material peluciado de alta qualidade, ele possui uma textura extremamente macia, ideal para relaxar ou apoiar os pés. Disponível em cores vibrantes, como rosa e creme, o puff oferece versatilidade na combinação com diferentes estilos de decoração, seja em ambientes modernos ou mais descontraídos. Sua estrutura compacta o torna fácil de ser integrado a salas, quartos ou cantos de leitura, criando um espaço acolhedor e cheio de personalidade. Este puff é a escolha perfeita para quem busca adicionar um toque de conforto e estilo ao ambiente.",
    fullDescription: "Puff Pelúcia com revestimento fofo e macio em material peluciado, disponível em cores vibrantes, perfeito para criar um ambiente aconchegante e estiloso.",
    features: [
      "Sistema de abertura retrátil",
      "Encosto reclinável",
      "Espuma D33 de alta densidade",
      "Tecido suede premium resistente a manchas"
    ],
    specifications: {
      dimensions: "",
      weight: "75kg",
      maxWeight: "Suporta até 300kg",
      materials: "Puff Pelúcia com revestimento fofo e macio em material peluciado, disponível em cores vibrantes",
      warranty: "2 anos contra defeitos de fabricação"
    },
    customization: [
      "Disponível em Rosa e Bege.",
      
    ]
  }
  
  
];

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  experience: string;
}


// Sample historical milestones
export interface HistoricalMilestone {
  year: string;
  title: string;
  description: string;
  image?: string;
}

export const historicalMilestones: HistoricalMilestone[] = [
  {
    year: "2010 ",
    title: "Fundação e Primeiros Passos",
    description: "A Sonhar Colchões e Estofados foi fundada com a missão de oferecer produtos de qualidade para proporcionar conforto e bem-estar aos clientes. A primeira loja foi inaugurada em Minas Gerais, com um atendimento diferenciado e foco na excelência.",
    image: "https://i.postimg.cc/fTj9Z0y3/historia.webphttps://i.postimg.cc/fTj9Z0y3/historia.webp"
  },
  {
    year: "2013",
    title: "Expansão Regional",
    description: "Com o crescimento da marca e a demanda por seus produtos, a Sonhar Colchões expandiu para outras cidades de Minas Gerais, incluindo Alfenas, onde se consolidou como referência no setor.",
    image: "https://static4.depositphotos.com/1009701/356/i/450/depositphotos_3567684-stock-photo-new-shopping-center.jpg"
  },
  {
    year: "2016",
    title: "Diversificação de Produtos",
    description: "A empresa ampliou seu catálogo, oferecendo não apenas colchões, mas também estofados, cabeceiras e camas box baú. Essa diversificação atendeu a diferentes públicos e reforçou a marca no mercado.",
    image: "https://th.bing.com/th/id/OIP.A3wGa1j2C9HDR1vAJqPq6gHaEP?rs=1&pid=ImgDetMain"
  },
  {
    year: "2018",
    title: "Parcerias Estratégicas",
    description: "A Sonhar Colchões firmou parcerias com grandes fabricantes e fornecedores de matérias-primas de alta qualidade, garantindo inovação e conforto nos seus produtos.",
    image: "https://media.istockphoto.com/id/1160000498/pt/foto/business-partnership-meeting-in-office.jpg?s=612x612&w=0&k=20&c=FDOpdkhWLstxTiL4q6Auf52pxH_QvcIlWxkv78PmPng="
  },
  {
    year: "2020",
    title: "Presença em Shopping",
    description: "Para estar mais próxima do público e proporcionar uma experiência diferenciada, a empresa inaugurou uma unidade no Via Café Garden Shopping em Varginha, fortalecendo sua presença no estado.",
    image: "https://www.varginhaonline.com.br/noticias/fotos/195972/shopping.jpg"
  },
  {
    year: "2023",
    title: "Compromisso com a Comunidade",
    description: "Além de crescer no mercado, a empresa passou a investir em projetos sociais e eventos locais, reforçando seu compromisso com o bem-estar e desenvolvimento da comunidade onde está inserida.",
    image: "https://physicalcare.com.br/wp-content/uploads/2024/12/sono-de-qualidade.jpg"
  },
  {
    year: "2025",
    title: "Atual Gestão: Duas Lojas e Fábrica Própria",
    description: "Atualmente, a Sonhar Colchões e Estofados conta com duas lojas físicas e uma fábrica própria, garantindo a personalização e qualidade dos produtos. Com uma gestão moderna e focada na inovação, a marca se mantém em constante evolução, buscando sempre oferecer o melhor para seus clientes.",
    image: "https://i.postimg.cc/MTSwWXvT/Imagem-do-Whats-App-de-2025-03-15-s-13-09-05-d00c1e42.jpg"
  }
];
