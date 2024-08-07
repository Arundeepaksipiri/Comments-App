// Write your code here
import './index.css'
const CommentItem = props => {
  const {Comment, Like, Delete, Colors} = props
  const {id, name, comment, isLike, commentTime} = Comment
  const nameIcon = name.slice(0, 1)
  const like = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likeText = isLike ? 'like-color' : ''
  const onClickLike = () => {
    Like(id)
  }
  const onDelete = () => {
    Delete(id)
  }
  const colorIcon = Math.floor(Math.random() * Colors.length)
  return (
    <li>
      <div className="name-container">
        <p className={`${Colors[colorIcon]} name-icon`}>{nameIcon}</p>
        <p className="name">{name}</p>
        <p className="time">{commentTime}</p>
      </div>
      <p>{comment}</p>
      <div onClick={onClickLike}>
        <img src={like} alt="like" />
        <button>
          <p className={likeText}>Like</p>
        </button>
      </div>

      <button onClick={onDelete} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="delete"
        />
      </button>
      <hr />
    </li>
  )
}
export default CommentItem
