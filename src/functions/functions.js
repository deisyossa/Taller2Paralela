import axios from "axios";

const sala = async () => {
  const {data} = await axios.get("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
  return(data.deck_id);
};

const getCards = async (roomID) => {
  const {data} = await axios.get(`http://deckofcardsapi.com/api/deck/${roomID}/draw/?count=2`);
  return data.cards;
}


export { sala, getCards };