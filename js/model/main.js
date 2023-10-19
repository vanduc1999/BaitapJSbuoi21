function getEle(id) {
  return document.getElementById(id);
}

// hàm lấy thông tin nhân viên
function laythongtinNV() {
  var _taikhoan = getEle("tknv").value;
  var _ten = getEle("name").value;
  var _email = getEle("email").value;
  var _mk = getEle("password").value;
  var _birthday = getEle("datepicker").value;
  var _luongcoban = getEle("luongCB").value;
  var _chucVu = getEle("chucvu").value;
  var _giolam = getEle("gioLam").value;
  // ///////////////////////////////////////////////
  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  // Validation
  // bien valuadation
  var isValid = true; //tạo biến flag để check
  var valiDation = new Validation();
  // check Rỗng
  // check Tài Khoản

  isValid &=
    valiDation.ktraRong(_taikhoan, "tbTKNV", "(*)Vui lòng nhập tài khoản") &&
    valiDation.ktraKysoTaikhoan(
      _taikhoan,
      "tbTKNV",
      "(*)Vui lòng nhập tài khoản bằng số 4->6 ký tự",
      4,
      6
    ) &&
    valiDation.ktraTaiKhoanTonTai(
      _taikhoan,
      "tbTKNV",
      "(*)Tài khoản đã tồn tại",
      dsnv.arr
    );
  // check Tên
  isValid &=
    valiDation.ktraRong(_ten, "tbTen", "(*)Vui lòng nhập Tên") &&
    valiDation.ktraKytuTen(
      _ten,
      "tbTen",
      "(*)Vui lòng không nhập ký tự đặc biệt hoặc số"
    );
  // check Email
  isValid &=
    valiDation.ktraRong(_email, "tbEmail", "(*)Vui lòng nhập Email") &&
    valiDation.ktrakytuEmail(
      _email,
      "tbEmail",
      "(*)Vui lòng nhập đúng cú pháp abc@mail.com"
    );
  // check mật khẩu
  isValid &=
    valiDation.ktraRong(_mk, "tbMatKhau", "(*)Vui lòng nhập Mật khẩu") &&
    valiDation.ktraMatkhau(
      _mk,
      "tbMatKhau",
      "(*)Vui lòng nhập (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt) "
    );
  // check ngay
  isValid &=
    valiDation.ktraRong(_birthday, "tbNgay", "(*)Vui lòng chọn ngày") &&
    valiDation.ktraDate(
      _birthday,
      "tbNgay",
      "(*)Vui nhập đúng định dạng mm/dd/yyyy"
    );
  // check lương cơ bản
  isValid &=
    valiDation.ktraRong(
      _luongcoban,
      "tbLuongCB",
      "(*)Vui lòng nhập lương cơ bản"
    ) &&
    valiDation.ktraLuong(
      _luongcoban,
      "tbLuongCB",
      "(*)Vui lòng nhập số trong khoảng 1 triệu tới 20 triệu, không nhập chữ, khoảng cách hay ký tự đặc biệt",
      1000000,
      20000000
    );
  // check giờ làm
  isValid &=
    valiDation.ktraRong(_giolam, "tbGiolam", "(*)Vui lòng nhập giờ làm") &&
    valiDation.ktraOvertime(
      _giolam,
      "tbGiolam",
      "(*)Giờ làm tối thiểu 80h và tối đa là 200h không nhập chữ, khoảng trắng hay ký tự đặc biệt",
      80,
      200
    );
  // check chức vụ
  isValid &= valiDation.ktraChucvu(
    "chucvu",
    "tbChucVu",
    "(*)Vui lòng chọn chức vụ"
  );
  if (!isValid) {
    return;
  }
  ////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  // tao lop doi tuong nhan vien tu nhanvien.js
  var nhanvien = new quanlynhanvien(
    _taikhoan,
    _ten,
    _email,
    _mk,
    _birthday,
    _luongcoban,
    _chucVu,
    _giolam
  );

  //   goi ham tinh tong
  nhanvien.tinhTongluong();
  //   goi ham xep loai
  nhanvien.xepLoai();

  return nhanvien;
}
// bien global danh sách nhân viên
var dsnv = new danhsachNV();

// nut thêm nhân viên
getEle("btnThemNV").onclick = function () {
  var nhanvien = laythongtinNV();
  if (nhanvien) {
    dsnv.themNV(nhanvien);
    createTable(dsnv.arr);
    setLocalStorage();
  }
};

// tao bang nhan vien
function createTable(data) {
  var content = "";
  data.forEach(function (item, index) {
    content += `
        <tr>
            <td>${item.taikhoan}</td>
            <td>${item.ten}</td>
            <td>${item.email}</td>
            <td>${item.birthday}</td>
            <td>${item.chucVu}</td>
            <td>${item.tongLuong}</td>
            <td>${item.loai}</td>
            <td>
              <button class="btn btn-info" data-target="#myModal" data-toggle="modal"
              onclick="suaNv('${item.taikhoan}')">Sửa</button>
              <button class="btn btn-danger" onclick="xoaNv('${item.taikhoan}')">Xóa</button>
            </td>
        </tr>
    `;
  });
  getEle("tableDanhSach").innerHTML = content;
}
// xóa nhân viên
function xoaNv(tkhoan) {
  dsnv.xoaNV(tkhoan);
  createTable(dsnv.arr);
  setLocalStorage();
}
// sua nhan vien
function suaNv(tkhoanNV) {
  var NVien = dsnv.suaNV(tkhoanNV);
  if (NVien) {
    getEle("tknv").value = NVien.taikhoan;
    getEle("name").value = NVien.ten;
    getEle("email").value = NVien.email;
    getEle("password").value = NVien.mk;
    getEle("datepicker").value = NVien.birthday;
    getEle("luongCB").value = NVien.luongcoban;
    getEle("chucvu").value = NVien.chucVu;
    getEle("gioLam").value = NVien.giolam;
  }
}
// cap nhat nhan vien
getEle("btnCapNhat").onclick = function () {
  var capnhat = laythongtinNV();
  dsnv.capnhatNV(capnhat);
  createTable(dsnv.arr);
  setLocalStorage();
};
// Tìm kiếm nhân viên
getEle("searchName").addEventListener("keyup", function () {
  var keyword = getEle("searchName").value;
  var mangtimkiem = dsnv.timkiemNV(keyword);
  createTable(mangtimkiem);
});

// /////////////////////////////////////////////////////////////////
// ham luu mang nhan vien vao localStorage
// ham luu vao LocalStorage
function setLocalStorage() {
  // convert from JSON to string
  var dataString = JSON.stringify(dsnv.arr);
  // save LocalStorage
  localStorage.setItem("dsnv", dataString);
}
// ham xuat localStorage de hien thi khi load trang web
function getLocalStorage() {
  if (localStorage.getItem("dsnv")) {
    var dataString = localStorage.getItem("dsnv");
    // convert from string to JSON
    var dataJSON = JSON.parse(dataString);
    dsnv.arr = dataJSON;
    createTable(dsnv.arr);
  }
}
// tao bien global
getLocalStorage();
// ///////////////////////////////////////////////////////////////////////
