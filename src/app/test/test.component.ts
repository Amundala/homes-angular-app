import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  template: `
    <!-- <div class="grid grid-cols-1 gap-4 m-4 md:grid-cols-2 lg:grid-cols-4">
  <div class="bg-orange-700 min-h-[100px] shadow rounded-md"></div>
  <div class="bg-orange-950 min-h-[100px] shadow rounded-md"></div>
  <div class="bg-blue-950 min-h-[100px] shadow rounded-md"></div>
  <div class="bg-red-950 min-h-[100px] shadow rounded-md"></div>
</div> -->
    <!-- <div class="grid grid-cols-2 sm:grid-cols-12 gap-6">
  <div class="bg-red-950 rounded-lg min-h-[100px] sm:col-span-2"></div>
  <div class="bg-purple-950 rounded-lg min-h-[100px] sm:col-span-7"></div>
  <div class="bg-green-950 rounded-lg min-h-[100px] sm:col-span-3"></div>
</div> -->
    <div class="grid grid-cols-2 sm:grid-cols-12 gap-6">
      <div
        class="bg-red-950 rounded-lg min-h-[100px] sm:col-span-2 sm:block hidden"
      ></div>
      <div class="bg-purple-950 rounded-lg min-h-[100px] sm:col-span-7"></div>
      <div
        class="bg-green-950 rounded-lg min-h-[100px] sm:col-span-3 sm:block hidden"
      ></div>
    </div>
  `,
  styleUrl: './test.component.css',
})
export class TestComponent {}
