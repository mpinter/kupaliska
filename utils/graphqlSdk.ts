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
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "tickets" */
  insert_tickets?: Maybe<Tickets_Mutation_Response>;
  /** insert a single row into the table: "tickets" */
  insert_tickets_one?: Maybe<Tickets>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "tickets" */
  update_tickets?: Maybe<Tickets_Mutation_Response>;
  /** update single row of the table: "tickets" */
  update_tickets_by_pk?: Maybe<Tickets>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
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
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
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
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
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


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
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
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
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


export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
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
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
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


export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "tickets" */
export type Tickets = {
  __typename?: 'tickets';
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  entries_left?: Maybe<Scalars['Int']>;
  id: Scalars['uuid'];
  is_inside: Scalars['Boolean'];
  last_date_used?: Maybe<Scalars['date']>;
  payment_reference?: Maybe<Scalars['String']>;
  persons: Scalars['Int'];
  phone?: Maybe<Scalars['String']>;
  ticket_type: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user_id?: Maybe<Scalars['uuid']>;
  was_paid: Scalars['Boolean'];
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
  email?: Maybe<String_Comparison_Exp>;
  entries_left?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  is_inside?: Maybe<Boolean_Comparison_Exp>;
  last_date_used?: Maybe<Date_Comparison_Exp>;
  payment_reference?: Maybe<String_Comparison_Exp>;
  persons?: Maybe<Int_Comparison_Exp>;
  phone?: Maybe<String_Comparison_Exp>;
  ticket_type?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
  was_paid?: Maybe<Boolean_Comparison_Exp>;
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
  email?: Maybe<Scalars['String']>;
  entries_left?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  is_inside?: Maybe<Scalars['Boolean']>;
  last_date_used?: Maybe<Scalars['date']>;
  payment_reference?: Maybe<Scalars['String']>;
  persons?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  ticket_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
  was_paid?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Tickets_Max_Fields = {
  __typename?: 'tickets_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  entries_left?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  last_date_used?: Maybe<Scalars['date']>;
  payment_reference?: Maybe<Scalars['String']>;
  persons?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  ticket_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Tickets_Min_Fields = {
  __typename?: 'tickets_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  entries_left?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  last_date_used?: Maybe<Scalars['date']>;
  payment_reference?: Maybe<Scalars['String']>;
  persons?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  ticket_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
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
  email?: Maybe<Order_By>;
  entries_left?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_inside?: Maybe<Order_By>;
  last_date_used?: Maybe<Order_By>;
  payment_reference?: Maybe<Order_By>;
  persons?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  ticket_type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  was_paid?: Maybe<Order_By>;
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
  Email = 'email',
  /** column name */
  EntriesLeft = 'entries_left',
  /** column name */
  Id = 'id',
  /** column name */
  IsInside = 'is_inside',
  /** column name */
  LastDateUsed = 'last_date_used',
  /** column name */
  PaymentReference = 'payment_reference',
  /** column name */
  Persons = 'persons',
  /** column name */
  Phone = 'phone',
  /** column name */
  TicketType = 'ticket_type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WasPaid = 'was_paid'
}

/** input type for updating data in table "tickets" */
export type Tickets_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  entries_left?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  is_inside?: Maybe<Scalars['Boolean']>;
  last_date_used?: Maybe<Scalars['date']>;
  payment_reference?: Maybe<Scalars['String']>;
  persons?: Maybe<Scalars['Int']>;
  phone?: Maybe<Scalars['String']>;
  ticket_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
  was_paid?: Maybe<Scalars['Boolean']>;
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
  Email = 'email',
  /** column name */
  EntriesLeft = 'entries_left',
  /** column name */
  Id = 'id',
  /** column name */
  IsInside = 'is_inside',
  /** column name */
  LastDateUsed = 'last_date_used',
  /** column name */
  PaymentReference = 'payment_reference',
  /** column name */
  Persons = 'persons',
  /** column name */
  Phone = 'phone',
  /** column name */
  TicketType = 'ticket_type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WasPaid = 'was_paid'
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

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  city: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  psc: Scalars['String'];
  street: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  city?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  psc?: Maybe<String_Comparison_Exp>;
  street?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  city?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  psc?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  city?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  psc?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  city?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  psc?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  city?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  psc?: Maybe<Order_By>;
  street?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  City = 'city',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Psc = 'psc',
  /** column name */
  Street = 'street',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  city?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  psc?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  City = 'city',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Psc = 'psc',
  /** column name */
  Street = 'street',
  /** column name */
  UpdatedAt = 'updated_at'
}


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

export type InsertTicketMutationVariables = Exact<{
  phone?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  persons: Scalars['Int'];
}>;


export type InsertTicketMutation = (
  { __typename?: 'mutation_root' }
  & { insert_tickets?: Maybe<(
    { __typename?: 'tickets_mutation_response' }
    & { returning: Array<(
      { __typename?: 'tickets' }
      & Pick<Tickets, 'id'>
    )> }
  )> }
);

export type PayForTicketMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type PayForTicketMutation = (
  { __typename?: 'mutation_root' }
  & { update_tickets_by_pk?: Maybe<(
    { __typename?: 'tickets' }
    & Pick<Tickets, 'was_paid'>
  )> }
);

export type TicketsQueryVariables = Exact<{ [key: string]: never; }>;


export type TicketsQuery = (
  { __typename?: 'query_root' }
  & { tickets: Array<(
    { __typename?: 'tickets' }
    & Pick<Tickets, 'created_at' | 'entries_left' | 'id' | 'is_inside' | 'last_date_used' | 'persons' | 'ticket_type' | 'updated_at'>
  )> }
);

export type TicketQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type TicketQuery = (
  { __typename?: 'query_root' }
  & { tickets_by_pk?: Maybe<(
    { __typename?: 'tickets' }
    & Pick<Tickets, 'created_at' | 'email' | 'entries_left' | 'id' | 'is_inside' | 'last_date_used' | 'payment_reference' | 'persons' | 'phone' | 'ticket_type' | 'updated_at' | 'user_id' | 'was_paid'>
  )> }
);


export const InsertTicketDocument = gql`
    mutation InsertTicket($phone: String = "", $email: String!, $persons: Int!) {
  insert_tickets(objects: {phone: $phone, email: $email, persons: $persons}) {
    returning {
      id
    }
  }
}
    `;
export const PayForTicketDocument = gql`
    mutation PayForTicket($id: uuid!) {
  update_tickets_by_pk(pk_columns: {id: $id}, _set: {was_paid: true}) {
    was_paid
  }
}
    `;
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
export const TicketDocument = gql`
    query Ticket($id: uuid!) {
  tickets_by_pk(id: $id) {
    created_at
    email
    entries_left
    id
    is_inside
    last_date_used
    payment_reference
    persons
    phone
    ticket_type
    updated_at
    user_id
    was_paid
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    InsertTicket(variables: InsertTicketMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertTicketMutation> {
      return withWrapper(() => client.request<InsertTicketMutation>(InsertTicketDocument, variables, requestHeaders));
    },
    PayForTicket(variables: PayForTicketMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PayForTicketMutation> {
      return withWrapper(() => client.request<PayForTicketMutation>(PayForTicketDocument, variables, requestHeaders));
    },
    Tickets(variables?: TicketsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TicketsQuery> {
      return withWrapper(() => client.request<TicketsQuery>(TicketsDocument, variables, requestHeaders));
    },
    Ticket(variables: TicketQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TicketQuery> {
      return withWrapper(() => client.request<TicketQuery>(TicketDocument, variables, requestHeaders));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;