const data = [
  {
    name: "CashNGifts",
    link: "https://play.google.com/store/apps/details?id=com.cashngifts",
    description:
      "An App for the popular platform CashNGifts which has over 1M+ downloads.",
    features: [
      "E-Commerce for Digital Products",
      "Payment Gateway Integration",
      "Bill Payment and Online Recharge Integration",
      "Third Party Brand Integration",
    ],
    techstack: ["CodeIgniter", "Native Android", "MySQL"],
  },
  {
    name: "Youtilita Portal",
    link: "https://www.youtilities.co.uk/",
    description:
      "A Portal to create Pricing Contracts based on addresses and create contracts for energy switching. This is used for UK.",
    features: [
      "API integration with Udcore to provide pricing quotations for Electricity and Gas with address paffing",
      "Report generation from excel files to update generated contracts from various suppliers",
      "Created a support system to create and manage tickets",
    ],
    techstack: ["MySQL", "Laravel", "Blade", "jQuery"],
  },
  {
    name: "TacTyq",
    link: "https://play.google.com/store/apps/details?id=com.crowdwise.tactyq",
    description:
      "A idea evaluation and business consultancy app which evaluates a business idea based on a series of questions to identify th funding probability and giving suggestions by identifying the weak aspects of the business",
    features: [
      "A questionnaire based system which generates a score based on the answers chosen",
      "Strengths and weaknesses are showcased inside the business",
    ],
    techstack: ["Flutter", "Firebase", "NoSQL"],
  },
  {
    name: "Realtime P2P Chat Application",
    link: "https://nibbas-chat-no-storage.netlify.app/",
    description:
      "A realtime Chat application which uses sockets to deliver messages. There is no storage involved so once the user closes the session, it is gone ",

    features: [
      "Real-time chat based on rooms",
      "No storage for messages so entirely secure. Only online users can see the messages while they are online.",
    ],
    techstack: ["Node.js", "React"],
  },
  {
    name: "Pneumonia Detection using Machine Learning",
    link: "",
    description:
      "A Keras based neural network to classify whether a CT-scan of the chest has a likelihood of pneumonia. Could tweak it upto 88% accuracy.",
    features: ["Results based on CT-SCAN type of image"],
    techstack: ["tensorflow", "keras", "anaconda deployment"],
  },
  {
    name: "Movie Recommendation using Machine Learning",
    description:
      "Using a combination of user-based and content-based filtering, could recommend movies to a user based on a database of movies",
    features: [
      "Movies based on what other similar users have liked",
      "Movies based on similar content",
    ],
    techstack: ["Keras"],
  },
];

export default data;
