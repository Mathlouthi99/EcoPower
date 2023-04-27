import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryProduct } from 'app/entities/category-product';
import { Product } from 'app/entities/product';

import { CategoryProductService } from 'app/services/category-product.service';
import { ProductService } from 'app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss',
  '../../../../assets/admin/css/paper-dashboard.css',
'../../../../assets/admin/demo/demo.css',
'../../../../assets/admin/css/bootstrap.min.css',]
})
export class AddProductComponent {
  files: string[] = [];
  selectedFiles!: FileList;
  images: string[] = [];
  product: Product = new Product();
  categories!: CategoryProduct[];
  errorMessage: string = '';
  userFile: any;
  file!: string;
  public imagePath: any;
  imgURL: any;

  constructor(
    public productService: ProductService,
    private router: Router,
    private categoryProductService: CategoryProductService,
   // public toastr: ToastrService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.categoryProductService.getProductCategories().subscribe((data) => {
      this.categories = data;
    });
    this.infoForm();
  }

  infoForm() {
    this.productService.dataForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: [0, [Validators.required]],
      quantity: [0, [Validators.required]],
      productCategory: ['', [Validators.required]],
    });
  }

  addProduct() {
    const formData = new FormData();

    const product = this.productService.dataForm.value;

    // formData.append('article', JSON.stringify(product));
    formData.append('product', JSON.stringify(product));

    for (let i = 0; i < this.files.length; i++) {
      formData.append('files', this.files[i]);
      console.log(formData);
    }

    // formData.append('file', this.userFile);
    formData.append('file', this.file);
    this.productService.addProduct(formData).subscribe((data) => {
      this.router.navigate(['/']);
    });
  }

  setNewCategory(category: CategoryProduct): void {
    console.log(category);
    this.productService.dataForm.value.category = category;
  }

  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      for (var i = 0; i < event.target.files.length; i++) {
        this.files.push(event.target.files[i]);
      }

      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
       // this.toastr.success('Only images are supported.');

        return;
      }
      var reader = new FileReader();
      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      };
    }
  }
  onSelectFirstFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.file = file;
      // this.f['profile'].setValue(file);

      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
       // this.toastr.success('Only images are supported.');

        return;
      }
      var reader = new FileReader();
      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      };
    }
  }
}
