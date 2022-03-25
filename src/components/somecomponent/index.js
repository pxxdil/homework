const AlbumGambar = ({ src, children }) => (
  <div>
    <img src={src} width="300" height="300" className="rotate" />
    {children}
  </div>
);

const AlbumDesc = (props) => <h2>Album:{props.name}</h2>;

const AlbumName = ({name, artist, children}) => (
  <div className="AlbumName">
    <p>{name}</p>
    <p>{artist}</p>
    {children}
  </div>
);

const ButtonUrl = (url) => <button className="btn"><a href={url}>select</a></button>;

export {AlbumGambar, AlbumDesc, AlbumName, ButtonUrl};
