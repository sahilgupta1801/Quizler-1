export const userData = {
    name : 'Sahil Gupta',
    number : '9113593568',
    email : 'sahilgupta0118@gmail.com',
    dob : '18-01-2000',
    avatarSel : 1,
    depositBalance : 120,
    winningsBalance : 50,
    bonusBalance : 21,
    kyc : 'Processing',
    skillScore : 1050
};

export const trendingCards = [
    {color : 'pink', text : 'F1'},{color : '#Add8E6', text : 'Chelsea'},
    {color : 'pink', text : 'IPL'},{color : 'pink', text : 'F.R.I.E.N.D.S'},
    {color : '#Add8e6', text : 'Game of Thrones'}
];

export const youmightLikeCards = [
    {color : '#Add8e6', text : 'F.R.I.E.N.D.S'},{color : 'pink', text : 'Game of Thrones'},
    {color : '#Add8e6', text : 'F1'},{color : 'pink', text : 'Chelsea'},
    {color : '#Add8e6', text : 'IPL'}
];

export const genres = [
    {color : '#Add8e6', text : 'TV Shows'}, {color : 'yellow', text : 'Sports'},
    {color : 'pink', text : 'History'}, {color : '#Add8e6', text : 'Movies'},
    {color : 'yellow', text : 'Geography'}
];

export const allTopics = [
    {color : '#Add8e6', text : 'Chelsea'}, {color : 'yellow', text : 'Game of Thrones'},
    {color : 'pink', text : 'F.R.I.E.N.D.S'}, {color : '#Add8e6', text : 'IPL 2022'},
    {color : 'yellow', text : 'L.A Lakers'} , {color : 'pink', text : 'F1'},
    {color : '#Add8e6', text : 'Manchester United'}, {color : 'yellow', text : 'Liverpool'},
    {color : 'pink', text : 'Harry Potter'}, {color : '#Add8e6', text : 'Premier League'},
    {color : 'pink', text : 'Bollywood'}, {color : 'yellow', text : 'Champions League'}
];

export const genreCards = {
    'TV Shows' : [{text : 'Game of Thrones', color : 'pink'} , {text : 'F.R.I.E.N.D.S' , color : 'pink'}],
    'Sports' : [{text : 'Chelsea' , color : 'pink'} , {text : 'Manchester United' , color : 'pink'} , {text : 'LA Lakers', color : 'pink'} , {text : 'Liverpool' , color : 'red'} , {text : 'Champions League' , color : 'blue'} , {text : 'IPL 2022' , color : 'blue'} , {text : 'F1' , color : 'red'}],
    'Movies' : [{text : 'Bollywood' , color : 'pink'} , {text : 'Harry Potter' , color : 'blue'}],
    'History' : [{text : 'Indian History' , color : 'red'}], 
    'Geography' : [{text : 'Geography' , color : 'red'}],
};

export const contests = [
    {entry : '0', winning : '0', bonus : '0', players : '2', contestName : "Practice Contest", currentOnline : '2500'},
    {entry : '5', winning : '9', bonus : '5%', players : '2', contestName : "Beginner's Pot", currentOnline : '1500'},
    {entry : '25', winning : '40', bonus : '10%', players : '2', contestName : "Intermediate Table", currentOnline : '1100'},
    {entry : '49', winning : '85', bonus : '10%', players : '2', contestName : "Hot Contest", currentOnline : '600'},
    {entry : '99', winning : '170', bonus : '15%', players : '2', contestName : "High Value Table", currentOnline : '400'}
];

export const offers = [
    { offerName : 'Hello'},
    { offerName : 'Hello'},
    { offerName : 'Hello'}
];

export const gameApi = [
    {id : 'ABX', date : '08-07-2022' , topic : 'F1' , amountWon : ''} , 
    {id : 'ABG', date : '08-07-2022' , topic : 'Harry Potter' , amountWon : 'Rs 25'},
    {id : 'ABV', date : '08-07-2022' , topic : 'Chelsea' , amountWon : 'Rs 490'},
    {id : 'ABW', date : '07-07-2022' , topic : 'F1' , amountWon : ''} , 
    {id : 'ABQ', date : '07-07-2022' , topic : 'Harry Potter' , amountWon : 'Rs 25'},
    {id : 'ABE', date : '06-07-2022' , topic : 'F.R.I.E.N.D.S' , amountWon : 'Rs 25'} , 
    {id : 'ABS', date : '06-07-2022' , topic : 'Game of Thrones' , amountWon : ''},
    {id : 'ABA', date : '06-07-2022' , topic : 'Chelsea' , amountWon : 'Rs 490'}
];

export const transactionApi = 
    [{id : 'ABX', date : '08-07-2022' , type : 'Deposit' , amount : '200', status : 'Success'} , 
    {id : 'ABG', date : '08-07-2022' , type : 'Deposit' , amount : 'Rs 250', status : 'Success'},
    {id : 'ABV', date : '08-07-2022' , type : 'Withdrawal' , amount : 'Rs 500', status : 'Processing'},
    {id : 'ABW', date : '07-07-2022' , type : 'Deposit' , amount : '50', status : 'Success'} , 
    {id : 'ABQ', date : '07-07-2022' , type : 'Withdrawal' , amount : 'Rs 100', status : 'Success'},
    {id : 'ABE', date : '06-07-2022' , type : 'Withdrawal' , amount : 'Rs 100', status : 'Success'} , 
    {id : 'ABS', date : '06-07-2022' , type : 'Withdrawal' , amount : '200', status : 'Failed'},
    {id : 'ABA', date : '06-07-2022' , type : 'Deposit' , amount : 'Rs 400', status : 'Failed'}
    ];


