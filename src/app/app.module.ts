import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//routes Config
import { RouterModule } from '@angular/router'
import { ROUTES } from './app.routes';

//componets
import { AppComponent } from './app.component';

//Home
import { LoginComponent } from './acess/login/login.component';
import { LockscreenComponent } from './acess/lockscreen/lockscreen.component';
import { RegisterComponent } from './acess/register/register.component';

//Admin
import { AdminComponent } from './admin/admin.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminLeftSideComponent } from './admin/admin-left-side/admin-left-side.component';
import { AdminControlSidebarComponent } from './admin/admin-control-sidebar/admin-control-sidebar.component';

//Admin Dashboard
import { IndexComponent } from './admin/routes_child/dashboard/index/index.component';
import { Index2Component } from './admin/routes_child/dashboard/index2/index2.component';

//Admin Charts
import { ChartsJsComponent } from './admin/routes_child/charts/charts-js/charts-js.component';
import { MorrisComponent } from './admin/routes_child/charts/morris/morris.component';
import { FlotComponent } from './admin/routes_child/charts/flot/flot.component';
import { InlineChartsComponent } from './admin/routes_child/charts/inline-charts/inline-charts.component';

//Admin Forms
import { GeneralElementsComponent } from './admin/routes_child/forms/general-elements/general-elements.component';
import { AdvancedElementsComponent } from './admin/routes_child/forms/advanced-elements/advanced-elements.component';
import { EditorsComponent } from './admin/routes_child/forms/editors/editors.component';

//Admin Tables
import { SimpleTablesComponent } from './admin/routes_child/tables/simple-tables/simple-tables.component';
import { DataTablesComponent } from './admin/routes_child/tables/data-tables/data-tables.component';

//Admin Calendar
import { CalendarComponent } from './admin/routes_child/calendar/calendar.component';

//Admin Mailbox
import { MailboxComponent } from './admin/routes_child/mailbox/mailbox.component';
import { ComposeComponent } from './admin/routes_child/mailbox/compose/compose.component';
import { ReadMailComponent } from './admin/routes_child/mailbox/read-mail/read-mail.component';

//Admin Examples
import { ProfileComponent } from './admin/routes_child/examples/profile/profile.component';
import { PaceComponent } from './admin/routes_child/examples/pace/pace.component';
import { InvoiceComponent } from './admin/routes_child/examples/invoice/invoice.component';
import { InvoicePrintComponent } from './admin/routes_child/examples/invoice-print/invoice-print.component';
import { BlankComponent } from './admin/routes_child/examples/blank/blank.component';
import { NotFondComponent } from './admin/routes_child/examples/not-fond/not-fond.component';
import { InternalServerComponent } from './admin/routes_child/examples/internal-server/internal-server.component';

//Admin Widgets
import { WidgetsComponent } from './admin/routes_child/widgets/widgets.component';




@NgModule({
  declarations: [
    AppComponent,
    ChartsJsComponent,
    MorrisComponent,
    FlotComponent,
    InlineChartsComponent,
    IndexComponent,
    Index2Component,
    CalendarComponent,
    WidgetsComponent,
    BlankComponent, 
    InvoicePrintComponent, 
    InvoiceComponent, 
    LockscreenComponent, 
    LoginComponent, 
    PaceComponent, 
    ProfileComponent, 
    RegisterComponent, 
    AdminComponent, 
    AdminHeaderComponent, 
    AdminFooterComponent, 
    AdminLeftSideComponent, 
    AdminControlSidebarComponent,
    GeneralElementsComponent, 
    AdvancedElementsComponent, 
    EditorsComponent,  
    SimpleTablesComponent, 
    DataTablesComponent, 
    MailboxComponent, 
    NotFondComponent, 
    InternalServerComponent, 
    ComposeComponent, 
    ReadMailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
