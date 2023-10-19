function quanlynhanvien(
  _taikhoan,
  _ten,
  _email,
  _mk,
  _birthday,
  _luongcoban,
  _chucVu,
  _giolam,
) {
  this.taikhoan = _taikhoan;
  this.ten = _ten;
  this.email = _email;
  this.mk = _mk;
  this.birthday = _birthday;
  this.luongcoban = _luongcoban;
  this.chucVu = _chucVu;
  this.giolam = _giolam;
  this.tongLuong = 0;
  this.loai = "";

  this.tinhTongluong = function () {
    if (this.chucVu == "Sếp") {
      this.tongLuong = parseFloat(this.luongcoban) * 3;
    } else if (this.chucVu == "Trưởng phòng") {
      this.tongLuong = parseFloat(this.luongcoban) * 2;
    } else if (this.chucVu == "Nhân viên") {
      this.tongLuong = parseFloat(this.luongcoban) * 1;
    }
  };
  this.xepLoai = function () {
    if (this.giolam >= 192) {
      return (this.loai = "Nhân viên suất sắc");
    } else if (this.giolam >= 176) {
      return (this.loai = "Nhân viên giỏi");
    } else if (this.giolam >= 160) {
      return (this.loai = "Nhân viên khá");
    } else {
      return (this.loai = "Nhân viên trung bình");
    }
  };
}
