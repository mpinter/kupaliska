import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};


/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "tickets" */
  delete_tickets?: Maybe<Tickets_Mutation_Response>;
  /** delete single row from the table: "tickets" */
  delete_tickets_by_pk?: Maybe<Tickets>;
  /** insert data into the table: "tickets" */
  insert_tickets?: Maybe<Tickets_Mutation_Response>;
  /** insert a single row into the table: "tickets" */
  insert_tickets_one?: Maybe<Tickets>;
  /** update data of the table: "tickets" */
  update_tickets?: Maybe<Tickets_Mutation_Response>;
  /** update single row of the table: "tickets" */
  update_tickets_by_pk?: Maybe<Tickets>;
};


/** mutation root */
export type Mutation_RootDelete_TicketsArgs = {
  where: Tickets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tickets_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_TicketsArgs = {
  objects: Array<Tickets_Insert_Input>;
  on_conflict?: Maybe<Tickets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tickets_OneArgs = {
  object: Tickets_Insert_Input;
  on_conflict?: Maybe<Tickets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_TicketsArgs = {
  _inc?: Maybe<Tickets_Inc_Input>;
  _set?: Maybe<Tickets_Set_Input>;
  where: Tickets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tickets_By_PkArgs = {
  _inc?: Maybe<Tickets_Inc_Input>;
  _set?: Maybe<Tickets_Set_Input>;
  pk_columns: Tickets_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "tickets" */
  tickets: Array<Tickets>;
  /** fetch aggregated fields from the table: "tickets" */
  tickets_aggregate: Tickets_Aggregate;
  /** fetch data from the table: "tickets" using primary key columns */
  tickets_by_pk?: Maybe<Tickets>;
};


export type Query_RootTicketsArgs = {
  distinct_on?: Maybe<Array<Tickets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tickets_Order_By>>;
  where?: Maybe<Tickets_Bool_Exp>;
};


export type Query_RootTickets_AggregateArgs = {
  distinct_on?: Maybe<Array<Tickets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tickets_Order_By>>;
  where?: Maybe<Tickets_Bool_Exp>;
};


export type Query_RootTickets_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "tickets" */
  tickets: Array<Tickets>;
  /** fetch aggregated fields from the table: "tickets" */
  tickets_aggregate: Tickets_Aggregate;
  /** fetch data from the table: "tickets" using primary key columns */
  tickets_by_pk?: Maybe<Tickets>;
};


export type Subscription_RootTicketsArgs = {
  distinct_on?: Maybe<Array<Tickets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tickets_Order_By>>;
  where?: Maybe<Tickets_Bool_Exp>;
};


export type Subscription_RootTickets_AggregateArgs = {
  distinct_on?: Maybe<Array<Tickets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tickets_Order_By>>;
  where?: Maybe<Tickets_Bool_Exp>;
};


export type Subscription_RootTickets_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "tickets" */
export type Tickets = {
  __typename?: 'tickets';
  created_at: Scalars['timestamptz'];
  entries_left?: Maybe<Scalars['Int']>;
  id: Scalars['uuid'];
  is_inside: Scalars['Boolean'];
  last_date_used?: Maybe<Scalars['date']>;
  persons: Scalars['Int'];
  ticket_type: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "tickets" */
export type Tickets_Aggregate = {
  __typename?: 'tickets_aggregate';
  aggregate?: Maybe<Tickets_Aggregate_Fields>;
  nodes: Array<Tickets>;
};

/** aggregate fields of "tickets" */
export type Tickets_Aggregate_Fields = {
  __typename?: 'tickets_aggregate_fields';
  avg?: Maybe<Tickets_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Tickets_Max_Fields>;
  min?: Maybe<Tickets_Min_Fields>;
  stddev?: Maybe<Tickets_Stddev_Fields>;
  stddev_pop?: Maybe<Tickets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tickets_Stddev_Samp_Fields>;
  sum?: Maybe<Tickets_Sum_Fields>;
  var_pop?: Maybe<Tickets_Var_Pop_Fields>;
  var_samp?: Maybe<Tickets_Var_Samp_Fields>;
  variance?: Maybe<Tickets_Variance_Fields>;
};


/** aggregate fields of "tickets" */
export type Tickets_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tickets_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Tickets_Avg_Fields = {
  __typename?: 'tickets_avg_fields';
  entries_left?: Maybe<Scalars['Float']>;
  persons?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "tickets". All fields are combined with a logical 'AND'. */
export type Tickets_Bool_Exp = {
  _and?: Maybe<Array<Tickets_Bool_Exp>>;
  _not?: Maybe<Tickets_Bool_Exp>;
  _or?: Maybe<Array<Tickets_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  entries_left?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  is_inside?: Maybe<Boolean_Comparison_Exp>;
  last_date_used?: Maybe<Date_Comparison_Exp>;
  persons?: Maybe<Int_Comparison_Exp>;
  ticket_type?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "tickets" */
export enum Tickets_Constraint {
  /** unique or primary key constraint */
  TicketsPkey = 'tickets_pkey'
}

/** input type for incrementing numeric columns in table "tickets" */
export type Tickets_Inc_Input = {
  entries_left?: Maybe<Scalars['Int']>;
  persons?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "tickets" */
export type Tickets_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  entries_left?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  is_inside?: Maybe<Scalars['Boolean']>;
  last_date_used?: Maybe<Scalars['date']>;
  persons?: Maybe<Scalars['Int']>;
  ticket_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Tickets_Max_Fields = {
  __typename?: 'tickets_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  entries_left?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  last_date_used?: Maybe<Scalars['date']>;
  persons?: Maybe<Scalars['Int']>;
  ticket_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Tickets_Min_Fields = {
  __typename?: 'tickets_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  entries_left?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  last_date_used?: Maybe<Scalars['date']>;
  persons?: Maybe<Scalars['Int']>;
  ticket_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "tickets" */
export type Tickets_Mutation_Response = {
  __typename?: 'tickets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tickets>;
};

/** on conflict condition type for table "tickets" */
export type Tickets_On_Conflict = {
  constraint: Tickets_Constraint;
  update_columns: Array<Tickets_Update_Column>;
  where?: Maybe<Tickets_Bool_Exp>;
};

/** Ordering options when selecting data from "tickets". */
export type Tickets_Order_By = {
  created_at?: Maybe<Order_By>;
  entries_left?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_inside?: Maybe<Order_By>;
  last_date_used?: Maybe<Order_By>;
  persons?: Maybe<Order_By>;
  ticket_type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: tickets */
export type Tickets_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "tickets" */
export enum Tickets_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EntriesLeft = 'entries_left',
  /** column name */
  Id = 'id',
  /** column name */
  IsInside = 'is_inside',
  /** column name */
  LastDateUsed = 'last_date_used',
  /** column name */
  Persons = 'persons',
  /** column name */
  TicketType = 'ticket_type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "tickets" */
export type Tickets_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  entries_left?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  is_inside?: Maybe<Scalars['Boolean']>;
  last_date_used?: Maybe<Scalars['date']>;
  persons?: Maybe<Scalars['Int']>;
  ticket_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Tickets_Stddev_Fields = {
  __typename?: 'tickets_stddev_fields';
  entries_left?: Maybe<Scalars['Float']>;
  persons?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Tickets_Stddev_Pop_Fields = {
  __typename?: 'tickets_stddev_pop_fields';
  entries_left?: Maybe<Scalars['Float']>;
  persons?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Tickets_Stddev_Samp_Fields = {
  __typename?: 'tickets_stddev_samp_fields';
  entries_left?: Maybe<Scalars['Float']>;
  persons?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Tickets_Sum_Fields = {
  __typename?: 'tickets_sum_fields';
  entries_left?: Maybe<Scalars['Int']>;
  persons?: Maybe<Scalars['Int']>;
};

/** update columns of table "tickets" */
export enum Tickets_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EntriesLeft = 'entries_left',
  /** column name */
  Id = 'id',
  /** column name */
  IsInside = 'is_inside',
  /** column name */
  LastDateUsed = 'last_date_used',
  /** column name */
  Persons = 'persons',
  /** column name */
  TicketType = 'ticket_type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Tickets_Var_Pop_Fields = {
  __typename?: 'tickets_var_pop_fields';
  entries_left?: Maybe<Scalars['Float']>;
  persons?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Tickets_Var_Samp_Fields = {
  __typename?: 'tickets_var_samp_fields';
  entries_left?: Maybe<Scalars['Float']>;
  persons?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Tickets_Variance_Fields = {
  __typename?: 'tickets_variance_fields';
  entries_left?: Maybe<Scalars['Float']>;
  persons?: Maybe<Scalars['Float']>;
};


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type TicketsQueryVariables = Exact<{ [key: string]: never; }>;


export type TicketsQuery = (
  { __typename?: 'query_root' }
  & { tickets: Array<(
    { __typename?: 'tickets' }
    & Pick<Tickets, 'created_at' | 'entries_left' | 'id' | 'is_inside' | 'last_date_used' | 'persons' | 'ticket_type' | 'updated_at'>
  )> }
);


export const TicketsDocument = gql`
    query Tickets {
  tickets {
    created_at
    entries_left
    id
    is_inside
    last_date_used
    persons
    ticket_type
    updated_at
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Tickets(variables?: TicketsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TicketsQuery> {
      return withWrapper(() => client.request<TicketsQuery>(TicketsDocument, variables, requestHeaders));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;