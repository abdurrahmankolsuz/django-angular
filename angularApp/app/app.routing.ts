import {ModuleWithProviders} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

import {PostComponent} from './components/post.component'
import {CategoryComponent} from './components/category.component'
import {AboutComponent} from './components/about.component'
import {PostDetailComponent} from './components/post-detail.component'

const appRoutes: Routes = [

{

    path:'',
    component: PostComponent
},
{

    
    path:'categories',
    component:CategoryComponent
}
,
{

    path:'about',
    component:AboutComponent
}, 
{ 
    path: ':id',
    component: PostDetailComponent 
}

];
export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);