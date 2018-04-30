import { NgModule }                 from '@angular/core';
import { MatButtonModule }          from '@angular/material';
import { MatDialogModule }          from '@angular/material';
import { MatSnackBarModule }        from '@angular/material';
import { MatTableModule }           from '@angular/material';
import { MatMenuModule }            from '@angular/material';
import { MatTooltipModule }         from '@angular/material';
import { MatProgressBarModule }     from '@angular/material';
import { MatSidenavModule }         from '@angular/material';
import { MatTabsModule }            from '@angular/material';
import { MatCardModule }            from '@angular/material';
import { MatListModule }            from '@angular/material';
import { MatIconModule }            from '@angular/material';
import { MatToolbarModule }         from '@angular/material';
import { MatSortModule }            from '@angular/material/sort';
import { MatPaginatorModule }       from '@angular/material/paginator';
import { MatInputModule }           from '@angular/material/input';
import { MatExpansionModule }       from '@angular/material/expansion';
import { MatDividerModule }         from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule }          from '@angular/material/select';

@NgModule({
  imports:      [
    MatSnackBarModule,
    MatTableModule,
    MatDialogModule,
    MatMenuModule,
    MatButtonModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatExpansionModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatSelectModule
  ],
  exports:      [
    MatSnackBarModule,
    MatTableModule,
    MatDialogModule,
    MatMenuModule,
    MatButtonModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatExpansionModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatSelectModule
  ],
  providers:[]
})

export class MaterialModule { }
