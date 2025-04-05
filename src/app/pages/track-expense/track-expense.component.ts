import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-track-expense',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './track-expense.component.html',
  styleUrl: './track-expense.component.css'
})
export class TrackExpenseComponent {
  showExpenseForm = false;

  expenseAmount: number | null = null;
  selectedCategory: string = '';

  toggleExpenseForm() {
      if (!this.showExpenseForm) {
        this.showExpenseForm = true;
      }
  }

  submitExpense() {
    if (this.expenseAmount && !isNaN(Number(this.expenseAmount))) {
      this.expenseAmount = parseFloat(this.expenseAmount.toString());
      console.log('Expense Added:', this.expenseAmount, this.selectedCategory);
  
      // Reset the form values
      this.expenseAmount = null;
      this.selectedCategory = '';
  
    } else {
      alert('Please enter a valid amount');
    }
  }
}