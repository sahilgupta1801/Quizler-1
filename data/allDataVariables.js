export const userData = {
    name : 'Sahil Gupta',
    number : '9113593568',
    email : 'sahilgupta0118@gmail.com',
    dob : '18-01-2000',
    avatarSel : 1,
    location : 'India',
    depositBalance : 120,
    winningsBalance : 50,
    bonusBalance : 21,
    kyc : 'Processing',
    skillScore : 1050
};

//Got from Matchmaking API
export const opponentData = {
    name : 'Ammar Khurshid',
    number : '9395912345',
    avatarSel : 3,
    location : 'India'
}

//Get after Matchmaking
export const questionsData = [
    {question : 'Q1 : Where is the home of Mercedes?' , opt1 : 'England' , opt2 : 'Italy', opt3 : 'Belgium' , opt4 : 'Germany', correct : 'Germany'},
    {question : 'Q2 : Where is the home of Ferrari?' , opt1 : 'England' , opt2 : 'Italy', opt3 : 'Belgium' , opt4 : 'Germany', correct : 'Italy'},
    {question : 'Q3 : Where is the home of ?' , opt1 : 'England' , opt2 : 'Italy', opt3 : 'Belgium' , opt4 : 'Germany', correct : 'Belgium'},
    {question : 'Q4 : Where is the home of Mercedes?' , opt1 : 'England' , opt2 : 'Italy', opt3 : 'Belgium' , opt4 : 'Germany', correct : 'Belgium'},
    {question : 'Q5 : Where is the home of Mercedes?' , opt1 : 'England' , opt2 : 'Italy', opt3 : 'Belgium' , opt4 : 'Germany', correct : 'Belgium'},
    {question : 'Q6 : Where is the home of Mercedes?' , opt1 : 'England' , opt2 : 'Italy', opt3 : 'Belgium' , opt4 : 'Germany', correct : 'Belgium'},
    {question : 'Q7 : Who won the 2022 Baku Grand Prix?' , opt1 : 'Max Verstappen' , opt2 : 'Charles LeClerc', opt3 : 'Carlos Sainz' , opt4 : 'Lewis Hamilton' , correct : 'Max Verstappen'}
]

export const trendingCards = [
    {color : '#FF1801', text : 'F1'},{color : '#034694', text : 'Chelsea'},
    {color : '#00237D', text : 'IPL'},{color : '#9C8CD4', text : 'F.R.I.E.N.D.S'},
    {color : '#B9540C', text : 'Game of Thrones'}
];

export const youmightLikeCards = [
    {color : '#9C8CD4', text : 'F.R.I.E.N.D.S'},{color : '#B9540C', text : 'Game of Thrones'},
    {color : '#FF1801', text : 'F1'},{color : '#034694', text : 'Chelsea'},
    {color : '#00237D', text : 'IPL'}
];

export const genres = [
    {color : '#Add8e6', text : 'TV Shows'}, {color : 'yellow', text : 'Sports'},
    {color : 'pink', text : 'History'}, {color : '#Add8e6', text : 'Movies'},
    {color : 'yellow', text : 'Geography'}
];

export const allTopics = [
    {color : '#034694', text : 'Chelsea'}, {color : '#B9540C', text : 'Game of Thrones'},
    {color : '#9C8CD4', text : 'F.R.I.E.N.D.S'}, {color : '#00237D', text : 'IPL 2022'},
    {color : 'yellow', text : 'L.A Lakers'} , {color : '#FF1801', text : 'F1'},
    {color : '#DA020E', text : 'Manchester United'}, {color : '#D00027', text : 'Liverpool'},
    {color : '#740001', text : 'Harry Potter'}, {color : '#3D195B', text : 'Premier League'},
    {color : '#FFFBAB', text : 'Bollywood'}, {color : '#00088E', text : 'Champions League'}
];

export const genreCards = {
    'TV Shows' : [{text : 'Game of Thrones', color : '#B9540C'} , {text : 'F.R.I.E.N.D.S' , color : '#9C8CD4'}],
    'Sports' : [{text : 'Chelsea' , color : '#034694'} , {text : 'Manchester United' , color : '#DA020E'} , {text : 'LA Lakers', color : 'pink'} , {text : 'Liverpool' , color : '#D00027'} , {text : 'Champions League' , color : '#00088E'} , {text : 'IPL 2022' , color : '#00237D'} , {text : 'F1' , color : '#FF1801'}],
    'Movies' : [{text : 'Bollywood' , color : '#FFFBAB'} , {text : 'Harry Potter' , color : '#740001'}],
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


