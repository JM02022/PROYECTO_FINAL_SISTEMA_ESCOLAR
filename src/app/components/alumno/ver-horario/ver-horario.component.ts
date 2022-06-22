import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursoDetalle } from 'src/app/models/cursoDetalle';
import { Nota } from 'src/app/models/nota';
import { CursoDetalleService } from 'src/app/services/cursos-detalles/curso-detalle.service';
import { CursoService } from 'src/app/services/cursos/curso.service';
import { NotaService } from 'src/app/services/notas/nota.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-ver-horario',
  templateUrl: './ver-horario.component.html',
  styleUrls: ['./ver-horario.component.css']
})
export class VerHorarioComponent implements OnInit {
  public cursos:Curso[] = []; 
  public Usuario = {
    usuario: "",
    rol: "",
    sexo: "",
    datos: []
  }
  constructor(
    private usuario:UsuarioService,
    private apiCurso: CursoService) { }
  
  ngOnInit(): void {
    this.apiCurso.getCursos().subscribe(data=>{
      this.cursos = data
    })  
  }
  

}
