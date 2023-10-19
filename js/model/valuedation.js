function Validation() {
  // kiểm tra nhập rỗng input
  this.ktraRong = function (value, errorID, message) {
    //   check nhập
    if (value === "") {
      // không nhập liệu
      getEle(errorID).innerHTML = message;
      getEle(errorID).style.display = "block";
      return false;
    }
    // có nhập liệu
    getEle(errorID).innerHTML = "";
    getEle(errorID).style.display = "none";
    return true;
  };
  // kiểm tra chức vụ
  this.ktraChucvu = function (selectID, errorID, message) {
    //   check chọn chức vụ
    if (getEle(selectID).selectedIndex !== 0) {
      // vị trí 0
      // true
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    }
    // false
    getEle(errorID).innerHTML = message;
    getEle(errorID).style.display = "block";
    return false;
  };
  // kiểm tra ký tự
  // kiểm tra ký tự tài khoản
  this.ktraKysoTaikhoan = function (value, errorID, message, minKyso, maxKyso) {
    var kySo = /^[0-9]+$/g;
    if (value.trim().length >= minKyso && value.trim().length <= maxKyso) {
      if (value.match(kySo)) {
        // true
        getEle(errorID).innerHTML = "";
        getEle(errorID).style.display = "none";
        return true;
      } else {
        // false
        getEle(errorID).innerHTML = message;
        getEle(errorID).style.display = "block";
        return false;
      }
    } else {
      // false
      getEle(errorID).innerHTML = message;
      getEle(errorID).style.display = "block";
      return false;
    }
  };
  //   kiểm tra ký tự tên
  this.ktraKytuTen = function (value, errorID, message) {
    var kyTuTen =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if (value.match(kyTuTen)) {
      // true
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    } else {
      // false
      getEle(errorID).innerHTML = message;
      getEle(errorID).style.display = "block";
      return false;
    }
  };
  // kiểm tra ký tự email
  this.ktrakytuEmail = function (value, errorID, message) {
    var kyTuEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    if (value.match(kyTuEmail)) {
      // true
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    } else {
      // false
      getEle(errorID).innerHTML = message;
      getEle(errorID).style.display = "block";
      return false;
    }
  };
  //   kiểm tra mật khẩu
  this.ktraMatkhau = function (value, errorID, message) {
    var letterMK =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/g;
    if (value.match(letterMK)) {
      // true
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    } else {
      // false
      getEle(errorID).innerHTML = message;
      getEle(errorID).style.display = "block";
      return false;
    }
  };
  //  kiểm tra định dạng ngày tháng mm/dd/yyyy
  this.ktraDate = function (value, errorID, message) {
    var datecheck = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    if (value.match(datecheck)) {
      // true
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    } else {
      // false
      getEle(errorID).innerHTML = message;
      getEle(errorID).style.display = "block";
      return false;
    }
  };
  //   kiểm tra lương trong khoảng
  this.ktraLuong = function (value, errorID, message, minLuong, maxLuong) {
    if (value.trim() >= minLuong && value.trim() <= maxLuong) {
      // true
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    } else {
      // false
      getEle(errorID).innerHTML = message;
      getEle(errorID).style.display = "block";
      return false;
    }
  };
  //   kiểm tra thời gian trong khoảng
  this.ktraOvertime = function (value, errorID, message, minTime, maxTime) {
    if (value.trim() >= minTime && value.trim() <= maxTime) {
      // true
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    } else {
      // false
      getEle(errorID).innerHTML = message;
      getEle(errorID).style.display = "block";
      return false;
    }
  };
  //   kiểm tra tài khoản tồn tại
  this.ktraTaiKhoanTonTai = function (value, errorID, message, array) {
    var isStatus = true; // biến cờ hiệu
    array.forEach(function (index, i) {
      if (index.taikhoan === value) {
        //   trùng tài khoản
        isStatus = false;
      }
    });
    if (isStatus) {
      // true
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    } else {
      // false
      getEle(errorID).innerHTML = message;
      getEle(errorID).style.display = "block";
      return false;
    }
  };
}
