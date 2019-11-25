import React from 'react';
import { IonPage } from '@ionic/react';
import { connect } from 'react-redux';

const TodoListPageBase = () => {
  return <IonPage></IonPage>;
};

const mapState = state => ({});

const mapDispatch = dispatch => ({});

export const TodoListPage = connect(mapState, mapDispatch)(TodoListPageBase);
