import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import {formatDistanceToNow} from 'date-fns'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
const initialCommentsList = []
class Comments extends Component {
  state = {commentList: initialCommentsList, name: '', comment: '', count: 0}
  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,

      commentTime: formatDistanceToNow(new Date()),
      isLike: false,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
      count: prevState.count + 1,
    }))
  }
  name = event => {
    this.setState({name: event.target.value})
  }
  comment = event => {
    this.setState({comment: event.target.value})
  }
  onLike = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLike: !eachComment.isLike}
        }
        return eachComment
      }),
    }))
  }
  onDeleteComment = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.filter(
        eachComment => eachComment.id !== id,
      ),
    }))
    this.setState(prevState => ({count: prevState.count - 1}))
  }
  render() {
    const {name, comment, commentList, count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Comments</h1>
        <p>Say something about 4.0 Technologies</p>
        <div className="comment-container">
          <form className="form-content" onSubmit={this.onAddComment}>
            <input value={name} placeholder="Your Name" onChange={this.name} />
            <br />
            <textarea
              className="comment-text"
              value={comment}
              placeholder="Your Comment"
              onChange={this.comment}
            />
            <br />
            <button type="submit" className="add-comment-button">
              Add Comment
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <hr />
        <div className="count-container">
          <p className="comments-count">{count}</p>
          <p className="comments-para">Comments</p>
        </div>
        <ul className="unorder-comments">
          {commentList.map(eachComment => (
            <CommentItem
              Comment={eachComment}
              key={eachComment.id}
              Like={this.onLike}
              Delete={this.onDeleteComment}
              Colors={initialContainerBackgroundClassNames}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments

// Write your code here
