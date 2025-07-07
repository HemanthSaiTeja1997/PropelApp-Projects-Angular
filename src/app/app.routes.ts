import { Routes } from '@angular/router';
import { PracticeRxjs } from './components/practice-rxjs/practice-rxjs';
import { VirtualScrolling } from './CRUDProject/virtual-scrolling/virtual-scrolling';

export const routes: Routes = [
  { path: '', redirectTo: 'choose', pathMatch: 'full' },
  {
    path: 'User',
    loadComponent: () => import('./components/user/user').then((m) => m.User),
  },
  {
    path: 'home',
    loadComponent: () => import('./components/home/home').then((m) => m.Home),
    children: [
      {
        path: 'if',
        loadComponent: () =>
          import(
            './components/home/structural-directive/structural-directive'
          ).then((m) => m.StructuralDirective),
      },
      {
        path: 'for',
        loadComponent: () =>
          import(
            './components/home/structural-directive-ngfor/structural-directive-ngfor'
          ).then((m) => m.StructuralDirectiveNgfor),
      },
      {
        path: 'switch',
        loadComponent: () =>
          import(
            './components/home/structural-directive-ng-switch-vs-switch-component/structural-directive-ng-switch-vs-switch-component'
          ).then((m) => m.StructuralDirectiveNgSwitchVsSwitchComponent),
      },
      { path: '', redirectTo: 'if', pathMatch: 'full' },
    ],
  },
  {
    path: 'subject',
    loadComponent: () =>
      import('./components/subject/subject').then((m) => m.Subject),
  },
  {
    path: 'choose',
    loadComponent: () =>
      import('./components/choose-comp/choose-comp').then((m) => m.ChooseComp),
  },
  {
    path: 'parent',
    loadComponent: () =>
      import('./components/parent/parent').then((m) => m.Parent),
  },
  {
    path: 'attribute',
    loadComponent: () =>
      import('./components/attribute-directive/attribute-directive').then(
        (m) => m.AttributeDirective
      ),
  },
  {
    path: 'signal',
    loadComponent: () =>
      import('./components/signal-component/signal-component').then(
        (m) => m.SignalComponent
      ),
  },
  {
    path: 'bpipes',
    loadComponent: () =>
      import('./components/built-in-pipes/built-in-pipes').then(
        (m) => m.BuiltInPipes
      ),
  },
  {
    path: 'rf',
    loadComponent: () =>
      import('./components/reactive-form/reactive-form').then(
        (m) => m.ReactiveForm
      ),
  },
  {
    path: 'crud',
    loadComponent: () => import('./CRUDProject/crud/crud').then((m) => m.CRUD),
  },
       {

      path:'infintescrolling',
      loadComponent:()=> import('./CRUDProject/view-users-infinite-scrolling/view-users-infinite-scrolling').then((m)=>m.ViewUsersInfiniteScrolling)
    },
  {
    path: 'adduser',
    loadComponent: () =>
      import('./CRUDProject/add-user/add-user').then((m) => m.AddUser),
  },
  {
    path: 'viewuser/:id',
    loadComponent: () =>
      import('./CRUDProject/view-user/view-user').then((m) => m.ViewUser),
  },
  {
    path: 'updateuser/:id',
    loadComponent: () =>
      import('./CRUDProject/update-user/update-user').then((m) => m.UpdateUser),
  },
    {
    path: 'rxjs',
    loadComponent: () =>
      import('./components/practice-rxjs/practice-rxjs').then((m) =>PracticeRxjs ),
  },
      {
    path: 'virtual',
    loadComponent: () =>
      import('./CRUDProject/virtual-scrolling/virtual-scrolling').then((m) =>VirtualScrolling ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/page-not-found/page-not-found').then(
        (m) => m.PageNotFound
      ),
  },
];
