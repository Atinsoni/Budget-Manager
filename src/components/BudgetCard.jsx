import React from 'react';
import { Card, ProgressBar, Stack, Button} from 'react-bootstrap';
import { currencyformatter } from '../utils';

const getprogressBarVarient = (amount, max) => {
  const ratio = amount/max;
  if(ratio < .5)return "primary";
  if(ratio < .75)return "warning";
  return "danger";
}
const BudgetCard = ({name, amount, max, gray}) => {
  const classNames = []
  if(amount > max){
    classNames.push("bg-danger", "bg-opacity-10");
  }
  else if(gray){
    classNames.push("bg-light");
  }
  return (
    <Card className={classNames.join(" ")}>
        <Card.Body>
            <Card.Title className='d-flex justify-content-between align-items-baseline fw-normal mb-3'>
                <div className='me-2'>{name}</div>
                <div className='d-flex align-item-baseline'>
                    {currencyformatter.format(amount)}
                    <span className='text-muted fs-6 ms-1'>
                      /{currencyformatter.format(max)}</span>
                </div>
            </Card.Title>
            <ProgressBar 
              className='rounded-pill' 
              variant={getprogressBarVarient(amount, max)}
              min={0}
              max={max}
              now={amount} 
            />
            <Stack direction="horizontal" gap="2" className='mt-4'>
              <Button variant='outline-primary' className='ms-auto'>
                Add Expense
              </Button>
              <Button variant='outline-secondary'>
                View Expanse
              </Button>
            </Stack>
        </Card.Body>
    </Card>
  )
}

export default BudgetCard