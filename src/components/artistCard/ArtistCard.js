export default function ArtistCard({ data }) {
  const viewItem = data[Math.floor(Math.random() * data.length)];
  return (
    <div className="avartar-username">
      <img src={viewItem.image} alt="Avartar" />
      <p>{viewItem.name}</p>
    </div>
  );
}
