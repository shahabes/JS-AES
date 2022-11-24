<template>
  <div
    class="d-flex justify-content-center align-items-center main-box-alignment"
  >
    <base-card class="col-12 col-sm-12 col-md-8 col-lg-6">
      <h4 class="d-flex justify-content-start col-12 px-5 pt-4">
        Welcome to the encryptor/decryptor application.
      </h4>
      <p class="d-flex justify-content-start col-12 px-5">
        No tokens will be sent to the server. Everything will be done on your
        client. So, turn your internet connection off and enjoy :)
      </p>

      <base-hr class="col-11 my-4 align_center" />

      <form>
        <div class="form-group col-10 align_center">
          <label for="inputs" class="col-12 py-1"> Input : </label>
          <textarea
            class="col-12 form-control form-control-lg"
            placeholder="Enter your inputs..."
            id="inputs"
            v-model="inputData"
            ref="inputs"
          ></textarea>
          <small id="emailHelp" class="form-text text-muted"
            >Please make sure the entered value is correct.</small
          >
        </div>
        <div class="form-group col-10 align_center">
          <label for="inputs" class="col-12 py-1"> Key : </label>
          <textarea
            class="col-12 form-control form-control-lg"
            placeholder="Enter your key..."
            id="inputs"
            v-model="keyCode"
          ></textarea>
          <small id="emailHelp" class="form-text text-muted"
            >Please enter your key.</small
          >
        </div>
        <div class="form-group col-12 mt-3 mb-5 d-flex justify-content-evenly">
          <button
            @click="encryption"
            type="button"
            class="col-4 btn btn-primary"
          >
            Encrypt
          </button>
          <button @click="decryption" type="button" class="col-4 btn btn-info">
            Decrypt
          </button>
        </div>
      </form>
      <div
        v-if="doWeHaveResults"
        @click="copyResult"
        class="WeHaveResults col-11 border border-1 border-primary rounded my-3 p-3"
      >
        <h5 class="col-6 align_center pb-3">
          Here's the result, click to copy :)
        </h5>
        <p class="text-center result align_center">
          <apan class="text-justify">{{ result }}</apan>
        </p>
      </div>
    </base-card>
  </div>
</template>

<script>
import Swal from "sweetalert2";
var AES = require("crypto-js/aes");
var CryptoJS = require("crypto-js");
var SHA256 = require("crypto-js/sha256");

export default {
  data() {
    return {
      // user input data value.
      inputData: "",
      // user key code value.
      keyCode: "",
      // when this variable changes to true, we can see our results.
      doWeHaveResults: false,
      // This line helps you to display the encryption or decryption result on the screen.
      result: "",
    };
  },
  methods: {
    encryption() {
      // First we change the doWeHaveResults variable to true because we want to see the results.
      this.doWeHaveResults = true;
      // You can get the Input values as this.inputData and you can get Key values as this.keyCode
      this.result = this.Encrypt(this.inputData, this.keyCode);
    },
    decryption() {
      // First we change the doWeHaveResults variable to true because we want to see the results.
      this.doWeHaveResults = true;

      // You can get the Input values as this.inputData and you can get Key values as this.keyCode
      this.result = this.Decrypt(this.inputData, this.keyCode);
    },
    Encrypt(word, key = "share") {
      let encJson = CryptoJS.AES.encrypt(
        JSON.stringify(word),
        key
      ).toString();
      let encData = CryptoJS.enc.Base64.stringify(
        CryptoJS.enc.Utf8.parse(encJson)
      );

      return encData;
    },
    Decrypt(word, key = "share") {
      let decData = CryptoJS.enc.Base64.parse(word).toString(
        CryptoJS.enc.Utf8
      );
      let bytes = CryptoJS.AES.decrypt(decData, key).toString(
        CryptoJS.enc.Utf8
      );
      return JSON.parse(bytes);
    },
    copyResult() {
      // this line This line is responsible for saving the result to your clipboard.
      try {
        navigator.clipboard.writeText(this.result);

        // If you have a succsse message as server response, this toast will show.
        Swal.fire({
          toast: true,
          icon: "success",
          title: "The result was copied",
          animation: false,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
      } catch (e) {
        console.log(e);
        // If you have an error message as server response, this toast will show.
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "error",
          title: "مشکلی رخ داده است",
          animation: false,
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
      }
    },
    focusInput() {
      // The task of this line is to focus on the first textarea when the page is loaded.
      this.$refs.inputs.focus();
    },
  },
  mounted() {
    this.focusInput();
    console.log(SHA256("Message"));
    console.log(CryptoJS);
    console.log(AES);
    console.clear();
  },
};
</script>

<style scoped>
.main-box-alignment {
  height: 100vh;
}

.align_center {
  display: table;
  margin: 0 auto;
}
textarea {
  background: #e6e6e6 !important;
  color: #666 !important;
  outline: none !important;
  border: 1px solid #666 !important;
  resize: none;
}

textarea:focus {
  outline: none !important;
  border: 1px solid #666 !important;
  box-shadow: none !important;
}

button:focus {
  outline: none !important;
  border: none !important;
  box-shadow: none !important;
}

.WeHaveResults {
  margin: 0 auto !important;
  transition: all 0.5s linear !important;
  cursor: pointer;
  margin-bottom: 30px !important;
}

.result {
  user-select: all;
  word-break: break-all;
}
</style>
