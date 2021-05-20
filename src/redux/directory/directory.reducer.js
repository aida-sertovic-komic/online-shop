const INITIAL_STATE = {
    sections: [{
        title: 'nakit',
        imageUrl: 'https://i.pinimg.com/564x/33/cb/e9/33cbe91ab1ab445187b1bb633e71033d.jpg',
        id: 1,
        linkUrl: 'shop/nakit'
    },
    {
        title: 'torbe',
        imageUrl: 'https://i.pinimg.com/564x/f4/b7/c8/f4b7c87cf9897d31d7c36e91bcfcfa2f.jpg',
        id: 2,
        linkUrl: 'shop/torbe'
    },
    {
        title: 'šeširi',
        imageUrl: 'https://i.pinimg.com/564x/b8/7b/37/b87b3756fe1651e733f3ed1a40570dbe.jpg',
        id: 3,
        linkUrl: 'shop/sesiri'
    },
    {
        title: 'naočale',
        imageUrl: 'https://akitto.co.jp/cms/wp-content/uploads/2018/11/pin4-1-1.jpg',
        id: 4,
        linkUrl: 'shop/naocale'
    },
    {
        title: 'parfemi',
        imageUrl: 'https://i.pinimg.com/564x/12/cf/db/12cfdb8c492b54cd62ec799a4fb4bf83.jpg',
        id: 5,
        linkUrl: 'shop/parfemi'
    }]
};

const directoryReducer = (state = INITIAL_STATE, action)=> {
    switch(action.type){
        default:
            return state;
    }
};

export default directoryReducer;
