import Button from './Button'
import styled from 'styled-components'


const List = ({ onRemove, onAdd, items, name }) => {
  return <StyledList>
    <div style={{ fontSize: '16px', color: '#666', fontWeight: 'bold' }}>
      {name}
    </div>
    <Button onClick={() => onAdd({ eventName: name })}>
      Add
    </Button>
    {
      items.map(item => {
        return (
          <div className='item' key={item.id}>
            <span>
              {item.eventName} {item.id}
            </span>
            <Button
              style={{ color: '#999', marginLeft: '6px', cursor: 'pointer' }}
              onClick={() => onRemove(item.id)}>
              Remove
            </Button>
          </div>
        )
      })
    }
  </StyledList>
}

export default List

const StyledList = styled.div`
  .item{
    margin: 6px 0;
  }
`
