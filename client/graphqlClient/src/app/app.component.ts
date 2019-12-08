import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const Books = gql`
  query Books {
    books
  {
    id,
    name,
    genre,
    author{
      name
    }
  }
  }
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'graphqlClient';

  loading: boolean;
  books: any;
  private querySubscription: Subscription;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.querySubscription = this.apollo.watchQuery<any>({
      query: Books
    })
      .valueChanges
      .subscribe(({ data, loading }) => {
        this.loading = loading;
        this.books = data.books;
      });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
