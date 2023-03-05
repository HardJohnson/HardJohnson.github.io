const quotes = [
  {
    quote: "당신은 오늘 햄버거를 먹어야합니다!",
  },
  {
    quote: "잘 하는 건 다 있어요, 그걸 안 찾아서 그렇지",
  },
  {
    quote: "너의 장점을 찾아주는 사람을 만나라.",
  },
  {
    quote: "깨지고 부셔저라.",
  },
  {
    quote: "의견 조율에 다툼은 당연하다.",
  },
  {
    quote: "포기하면 이미 진거다",
  },
  {
    quote: "행복은 노력만이 아닌 사고방식의 전환이 필수이다.",
  },
  {
    quote: "실패에 너무 예민해하지 마라",
  },
  {
    quote: "부모님이 하는말 들어라, 부모님이 하는말이 답이다.",
  },
  {
    quote: "남들은 다 하는데 너만 못하는건 없어.",
  },
];

const quote = document.querySelector("#header span");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;