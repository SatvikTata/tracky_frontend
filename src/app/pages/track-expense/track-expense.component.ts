import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {}

  toggleExpenseForm() {
      if (!this.showExpenseForm) {
        this.showExpenseForm = true;
      }
  }

  submitExpense() {
    if (this.expenseAmount && !isNaN(Number(this.expenseAmount))) {
      this.expenseAmount = parseFloat(this.expenseAmount.toString());
      console.log('Expense Added:', this.expenseAmount, this.selectedCategory);
  
      // Send data to Django Backend
      this.http.post('http://localhost:8000/track-expense/', {
        amount: this.expenseAmount,
        category: this.selectedCategory
      }).subscribe(
        response => {
          console.log('Data sent successfully to backend', response);
        },
        error => {
          console.error('Error sending data to backend', error);
        }
      );
  
      // Reset the form values
      this.expenseAmount = null;
      this.selectedCategory = '';
  
    } else {
      alert('Please enter a valid amount');
    }
  }
}