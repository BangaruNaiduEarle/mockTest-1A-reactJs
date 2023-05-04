import {Component} from 'react'

import {
  Heading,
  MainContainer,
  EditableContainer,
  ContentBtn,
  Input,
  Button,
  Para,
} from './styledComponents'

class EditableText extends Component {
  state = {save: true, inputValue: '', edit: false}

  onChangeText = event => {
    this.setState({inputValue: event.target.value})
  }

  onClickBtn = () => {
    this.setState(prevState => ({
      save: !prevState.save,
      edit: !prevState.edit,
    }))
  }

  render() {
    const {save, inputValue, edit} = this.state

    return (
      <MainContainer>
        <EditableContainer>
          <Heading>Editable Text Input</Heading>
          {save && (
            <ContentBtn>
              <Input
                type="text"
                id="text"
                value={inputValue}
                onChange={this.onChangeText}
              />
              <Button onClick={this.onClickBtn}>Save</Button>
            </ContentBtn>
          )}

          {edit && (
            <ContentBtn>
              <Para>{inputValue}</Para>
              <Button onClick={this.onClickBtn}>Edit</Button>
            </ContentBtn>
          )}
        </EditableContainer>
      </MainContainer>
    )
  }
}

export default EditableText
