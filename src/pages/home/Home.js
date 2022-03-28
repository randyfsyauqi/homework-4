function Row ({name, artists, images, album, url}) {
  return (
     <tr>
          <td><img src={images} className="image" alt="images"></img></td>
          <td>
            <p className="title">{name}</p>
            <p className="artist">{artists}</p>
            <p className="album">{album}</p>

          </td>
          <td><button>Select</button></td>
     </tr>
  )
}

export default Row;

