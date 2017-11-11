import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { PostComponent } from './components/post.component'
import { CategoryComponent } from './components/category.component'
import { AboutComponent } from './components/about.component'
import { PostDetailComponent } from './components/post-detail.component'
import { TagPostComponent } from './components/tag-post.component'

const appRoutes: Routes = [

    {

        path: '',
        component: PostComponent
    },
    {
        path: 'tags',
        component: CategoryComponent
    }
    ,
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: ':slug',
        component: PostDetailComponent
    },
    {
        path: 'tags/:tag',
        component: TagPostComponent,
    }

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);