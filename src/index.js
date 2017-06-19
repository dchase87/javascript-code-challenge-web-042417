$(document).ready(function(){
  const app = new App()
  app.render()
})

class App {
  constructor () {
    this.list = document.querySelector('#comment-list')
    this.submit = document.querySelector('#submit')
    this.inputText = document.querySelector('form > input')
    this.commentList = new CommentList()
    this.submit.addEventListener('click', () => this.onSubmit())
  }

  onSubmit () {
    event.preventDefault()
    const input = this.inputText.value
    console.log(input)
    this.commentList.addComment(input)
    this.inputText.value = ''
    this.render()
  }

  render () {
    return this.list.innerHTML = this.commentList.render()
  }
}
