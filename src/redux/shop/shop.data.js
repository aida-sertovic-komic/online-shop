const SHOP_DATA = {
  nakit: {
    id: 1,
    title: 'Nakit',
    routeName: 'nakit',
    items: [
      {
        id: 1,
        name: 'DS Elegant naušnice',
        imageUrl: 'https://www.oreabazaar.com/media/image/18444/large/8105B71E-EA50-4064-B63E-B05BF37678ED.jpeg',
        price: 25
      },
      {
        id: 2,
        name: 'Rose London set',
        imageUrl: 'https://www.oreabazaar.com/media/image/6737/large/RozenkvarcRosegold.jpg',
        price: 78
      },
      {
        id: 3,
        name: 'Gold Alexandra narukvice',
        imageUrl: 'https://images.unsplash.com/photo-1608543837770-dbad30f0e7c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
        price: 35
      },
      {
        id: 4,
        name: 'Olive Tatiane set',
        imageUrl: 'https://images.unsplash.com/photo-1603974372039-adc49044b6bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=374&q=80',
        price: 65
      },
      {
        id: 5,
        name: 'Gold Pearl ogrlica',
        imageUrl: 'https://images.unsplash.com/photo-1609245340409-cad2474ab1d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=282&q=80',
        price: 28
      },
      {
        id: 6,
        name: 'UK Koureas set',
        imageUrl: 'https://images.unsplash.com/photo-1535556116002-6281ff3e9f36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80',
        price: 75
      },
      {
        id: 7,
        name: 'Liberte ogrlica',
        imageUrl: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80',
        price: 55
      },
      {
        id: 8,
        name: 'Wolf Cap prsten',
        imageUrl: 'https://images.unsplash.com/photo-1609245551977-e903abeb8c69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=333&q=80',
        price: 24
      },
      {
        id: 9,
        name: 'Blue Snapback ogrlica',
        imageUrl: 'https://images.unsplash.com/photo-1600721391689-2564bb8055de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1850&q=80',
        price: 59
      }
    ]
  },
  torbe: {
    id: 2,
    title: 'Torbe',
    routeName: 'torbe',
    items: [
      {
        id: 10,
        name: 'Bellis torba',
        imageUrl: 'https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80',
        price: 70
      },
      {
        id: 11,
        name: 'Basket torba',
        imageUrl: 'https://images.unsplash.com/photo-1554342872-034a06541bad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80',
        price: 80
      },
      {
        id: 12,
        name: 'Creative Headline torba',
        imageUrl: 'https://images.unsplash.com/photo-1566150902887-9679ecc155ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        price: 110
      },
      {
        id: 13,
        name: 'Flamingo Graphic torba',
        imageUrl: 'https://images.unsplash.com/photo-1560155136-ca9fd0b25a4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
        price: 90
      },
      {
        id: 14,
        name: 'Round Beige torba',
        imageUrl: 'https://images.unsplash.com/photo-1531357732422-758bdf2af3d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80',
        price: 65
      },
      {
        id: 15,
        name: 'Leather Natanni ruksak',
        imageUrl: 'https://images.unsplash.com/photo-1532697057284-bbe526e18cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        price: 85
      },
      {
        id: 16,
        name: 'Leather Limited torba',
        imageUrl: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=740&q=80',
        price: 130
      },
      {
        id: 17,
        name: 'Beraam ruksak',
        imageUrl: 'https://images.unsplash.com/photo-1569097941209-aca563eb07d8?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3wxMDA3MjYzMXx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 145
      }
    ]
  },
  sesiri: {
    id: 3,
    title: 'Šeširi',
    routeName: 'sesiri',
    items: [
      {
        id: 18,
        name: 'Barboza šešir',
        imageUrl: 'https://images.unsplash.com/flagged/photo-1557610603-6fb557a9e9e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
        price: 45
      },
      {
        id: 19,
        name: 'Eucalypt šešir',
        imageUrl: 'https://images.unsplash.com/photo-1548652035-16d4cacff1e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        price: 30
      },
      {
        id: 20,
        name: 'Bellis šešir',
        imageUrl: 'https://images.unsplash.com/photo-1491852807958-4326560208e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80',
        price: 50
      },
      {
        id: 21,
        name: 'Straw šešir',
        imageUrl: 'https://images.unsplash.com/photo-1490725263030-1f0521cec8ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80',
        price: 65
      },
      {
        id: 22,
        name: 'Pazani šešir',
        imageUrl: 'https://images.unsplash.com/photo-1563137119-d803158ece95?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1396&q=80',
        price: 68
      },
      {
        id: 23,
        name: 'Curties šešir',
        imageUrl: 'https://images.unsplash.com/photo-1557165515-0a5db651be2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=712&q=80',
        price: 58
      },
      {
        id: 24,
        name: 'Serenay šešir',
        imageUrl: 'https://images.unsplash.com/photo-1551985955-c3d96e220bcb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2045&q=80',
        price: 48
      },
      {
        id: 25,
        name: 'Doha šešir',
        imageUrl: 'https://images.unsplash.com/photo-1527019116805-6830bec33ebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80',
        price: 81
      }
    ]
  },
  naocale: {
    id: 4,
    title: 'Naočale',
    routeName: 'naocale',
    items: [
      {
        id: 26,
        name: 'Gentle Monster',
        imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        price: 55
      },
      {
        id: 27,
        name: 'Charlota',
        imageUrl: 'https://images.unsplash.com/photo-1577744486770-020ab432da65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
        price: 90
      },
      {
        id: 28,
        name: 'Annie',
        imageUrl: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        price: 80
      },
      {
        id: 29,
        name: 'Stephanie',
        imageUrl: 'https://images.unsplash.com/photo-1590564310418-66304f55a2c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        price: 135
      },
      {
        id: 30,
        name: 'Vans',
        imageUrl: 'https://images.unsplash.com/photo-1570993492880-e8b3bfd5e100?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
        price: 85
      },
      {
        id: 31,
        name: 'Beltran',
        imageUrl: 'https://images.unsplash.com/photo-1591643529995-aef2e1e6f281?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        price: 75
      },
      {
        id: 32,
        name: 'Englard',
        imageUrl: 'https://images.unsplash.com/photo-1587929501535-1e2d559e8488?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
        price: 135
      },
      {
        id: 33,
        name: 'Priscilla',
        imageUrl: 'https://images.unsplash.com/photo-1586652171272-8f18c34f79af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
        price: 110
      }
    ]
  },
  parfemi: {
    id: 5,
    title: 'Parfemi',
    routeName: 'parfemi',
    items: [
      {
        id: 34,
        name: 'Laurissi 100ml',
        imageUrl: 'https://images.unsplash.com/photo-1566977776052-6e61e35bf9be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
        price: 125
      },
      {
        id: 35,
        name: 'Linterdit Givenchy',
        imageUrl: 'https://images.unsplash.com/photo-1578996834254-13d1b661a5ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        price: 90
      },
      {
        id: 36,
        name: 'Gabrielle Channel 50ml',
        imageUrl: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        price: 149
      },
      {
        id: 37,
        name: 'Sun di Gioia 50ml',
        imageUrl: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        price: 115
      },
      {
        id: 38,
        name: 'Chanel 50ml',
        imageUrl: 'https://images.unsplash.com/photo-1572577515722-f9d7ec0d5daa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        price: 120
      },
      {
        id: 39,
        name: 'Giorgio Armani Si 50ml',
        imageUrl: 'https://images.unsplash.com/photo-1543422018-9a1c40cf955d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
        price: 145
      },
      {
        id: 40,
        name: 'Daisy Marc Jacobs 30ml',
        imageUrl: 'https://images.unsplash.com/photo-1588680388356-127f57196ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80',
        price: 70
      },
      {
        id: 41,
        name: 'Irresistible Givenchy 50ml',
        imageUrl: 'https://images.unsplash.com/photo-1591375372183-635d5e8917c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        price: 145
      },
    ]
  }
}

export default SHOP_DATA;
