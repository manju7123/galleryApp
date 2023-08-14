import './index.css'

const ThumbnailItem = props => {
  const {imageItems, selectedImage, isActive} = props
  const {imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} = imageItems

  const onSelectedImage = () => {
    selectedImage(imageUrl, imageAltText)
  }

  const clearOpacity = isActive && 'opa-btn'

  return (
    <li className="item">
      <button type="button" className="btn" onClick={onSelectedImage}>
        <img
          className={`thumb-image ${clearOpacity}`}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
