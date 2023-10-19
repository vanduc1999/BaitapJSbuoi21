function danhsachNV() {
  this.arr = []; // tạo mảng
  this.themNV = function (dataNV) {
    // tạo hàm thêm NV
    this.arr.push(dataNV); // thực hiện truyền tham số dataNV vào mảng arr
  };
  this.vtriNV = function (taikhoan) {
    // để xóa sửa cần tìm vị trí nhân viên
    var index = -1; // gán vi trí nhân viên -1 nếu không tìm thấy tài khoản
    this.arr.forEach(function (item, i) {
      if (item.taikhoan == taikhoan) {
        // nếu tài khoản trong mảng item === tham số tài khoản lúc nhấn nút
        index = i; // gán vtri i trong mảng = index hiện tại
      }
    });
    return index;
  };
  this.xoaNV = function (tkhoanNV) {
    // đã có trị trí thực hiện hàm Xóa NV
    var index = this.vtriNV(tkhoanNV); //gán biến vị trí bằng vị trí trong hàm tìm vị trí
    if (index !== -1) {
      // check nếu khác -1 thức là có vị trí nên thực hiện splice xóa 1 phần tử của vị trí index
      this.arr.splice(index, 1);
    }
  };
  this.suaNV = function (tKhoan) {
    // đã có trị trí thực hiện hàm Xóa NV
    var index = this.vtriNV(tKhoan); //gán biến vị trí bằng vị trí trong hàm tìm vị trí
    if (index !== -1) {
      // check nếu khác -1 thức là có vị trí nên thực hiện trả kết
      // quả vị trí hiện tại lưu lại vào mảng this.arr
      return this.arr[index];
    }
    return null; // nếu -1 trả về rỗng
  };
  this.capnhatNV = function (cnhat) {
    var index = this.vtriNV(cnhat.taikhoan); //gán biến vị trí bằng vị trí trong hàm tìm vị trí
    if (index !== -1) {
      this.arr[index] = cnhat; // nếu đúng thì gán mảng chính bằng tham số cnhat vào  các vi trí trong mảng array[index]
    }
  };
  this.timkiemNV = function (keyword) {
    var mangtimkiem = [];
    this.arr.forEach(function (item, i) {
      if (item.ten.toLowerCase().indexOf(keyword.toLowerCase()) > -1) {
        //tìm theo tên
        mangtimkiem.push(item);
      } else if (item.email.toLowerCase().indexOf(keyword.toLowerCase()) > -1) {
        //tìm theo email
        mangtimkiem.push(item);
      } else if (
        item.chucVu.toLowerCase().indexOf(keyword.toLowerCase()) > -1
      ) {
        //tìm theo chức vụ
        mangtimkiem.push(item);
      } else if (item.loai.toLowerCase().indexOf(keyword.toLowerCase()) > -1) {
        //tìm theo xếp loại nhân viên
        mangtimkiem.push(item);
      }
    });
    return mangtimkiem;
  };
}
