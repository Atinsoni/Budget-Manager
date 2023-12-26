// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
import { Container } from "react-bootstrap";
import {Stack, Button} from "react-bootstrap";
import BudgetCard from "./components/BudgetCard";
import AddBudgetModel from "./components/AddBudgetModel";
import { useBudgets } from "./contexts/BudgetContext";
function App() {
  const [showAddBudgetModal, setShowAddBudgetModel] = useState(false)
  const {budgets, getBudgetExpenses} = useBudgets()
  return (
    <>
      <Container className="my-4">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Budgets</h1>
          <Button varient="primary" onClick={() => setShowAddBudgetModel(true)}>
            Add Budget
          </Button>
          <Button variant="outline-primary">
            Add Expense
          </Button>
        </Stack>
        <div style={{
          display:"grid", 
          gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))", 
          gap:"1rem", 
          alignItems:"flex-start",
          }}
        >
          {budgets.map(budget => {
             const amount = getBudgetExpenses(budget.id).reduce(
              (total, expense) => total + expense.amount,
              0
            )
            return(
              <BudgetCard 
                key={budget.id}
                name={budget.name} 
                amount={amount} 
                max={budget.max} 
              />
            )  
          })}
        </div>
      </Container>
      <AddBudgetModel 
        show={showAddBudgetModal} 
        handleClose={() => setShowAddBudgetModel(false)}
      />
    </>
    
  );
}

export default App;
