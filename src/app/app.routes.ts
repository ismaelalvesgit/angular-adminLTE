import { Routes } from '@angular/router'

//home routes
import { LoginComponent } from './acess/login/login.component';
import { RegisterComponent } from './acess/register/register.component';
import { LockscreenComponent } from './acess/lockscreen/lockscreen.component';


//admin routes
import { AdminComponent } from './admin/admin.component';
import { ChartsJsComponent } from './admin/routes_child/charts/charts-js/charts-js.component';
import { MorrisComponent } from './admin/routes_child/charts/morris/morris.component';
import { FlotComponent } from './admin/routes_child/charts/flot/flot.component';
import { InlineChartsComponent } from './admin/routes_child/charts/inline-charts/inline-charts.component';
import { IndexComponent } from './admin/routes_child/dashboard/index/index.component';
import { Index2Component } from './admin/routes_child/dashboard/index2/index2.component';
import { CalendarComponent } from './admin/routes_child/calendar/calendar.component';
import { ProfileComponent } from './admin/routes_child/examples/profile/profile.component';
import { PaceComponent } from './admin/routes_child/examples/pace/pace.component';
import { InvoiceComponent } from './admin/routes_child/examples/invoice/invoice.component';
import { BlankComponent } from './admin/routes_child/examples/blank/blank.component';
import { GeneralElementsComponent } from './admin/routes_child/forms/general-elements/general-elements.component';
import { AdvancedElementsComponent } from './admin/routes_child/forms/advanced-elements/advanced-elements.component';
import { EditorsComponent } from './admin/routes_child/forms/editors/editors.component';
import { SimpleTablesComponent } from './admin/routes_child/tables/simple-tables/simple-tables.component';
import { DataTablesComponent } from './admin/routes_child/tables/data-tables/data-tables.component';
import { MailboxComponent } from './admin/routes_child/mailbox/mailbox.component';
import { NotFondComponent } from './admin/routes_child/examples/not-fond/not-fond.component';
import { InvoicePrintComponent } from './admin/routes_child/examples/invoice-print/invoice-print.component';
import { InternalServerComponent } from './admin/routes_child/examples/internal-server/internal-server.component';
import { WidgetsComponent } from './admin/routes_child/widgets/widgets.component';
import { ComposeComponent } from './admin/routes_child/mailbox/compose/compose.component';
import { ReadMailComponent } from './admin/routes_child/mailbox/read-mail/read-mail.component';


export const ROUTES:Routes = [
    
    {path: '', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'lockscreen', component: LockscreenComponent},
    {path: 'admin', component: AdminComponent, children:[
        //Dashboard
        {path: '', component: IndexComponent},
        {path: 'index2', component: Index2Component},

        //Charts
        {path: 'chartsJs', component: ChartsJsComponent},
        {path: 'morris', component: MorrisComponent},
        {path: 'flot', component: FlotComponent},
        {path: 'inline_charts', component: InlineChartsComponent},

        //Forms
        {path: 'general_elements', component: GeneralElementsComponent},
        {path: 'advanced_elements', component: AdvancedElementsComponent},
        {path: 'editors', component: EditorsComponent},

        //Tables
        {path: 'simple_tables', component: SimpleTablesComponent},
        {path: 'data_tables', component: DataTablesComponent},

        //Calendar
        {path: 'calendar', component: CalendarComponent},
        
        //Widgets
        {path: 'widgets', component: WidgetsComponent},

        //Mailbox
        {path: 'mailbox', component: MailboxComponent, children:[
            {path:'compose', component: ComposeComponent},
            {path:'read_mail', component: ReadMailComponent},
        ]},      

        //examples
        {path: 'invoce', component: InvoiceComponent},
        {path: 'invoce_print', component: InvoicePrintComponent},
        {path: 'profile', component: ProfileComponent},
        {path: 'blank', component: BlankComponent},
        {path: 'pace', component: PaceComponent},

        //pages Erro

        {path: '**', component:NotFondComponent},
        {path: 'internal_server', component: InternalServerComponent}
    ]}
]