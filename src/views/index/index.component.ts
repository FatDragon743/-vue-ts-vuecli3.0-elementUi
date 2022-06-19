import {Component, Vue} from 'vue-property-decorator';
@Component({
  name: 'index',
})
export default class Index extends Vue {
  // 定加载
  private imgUrl: string = `/static/index/14.png`;
  private fileList: Array<Object> = [];
  // 最先开始执行
  created() {
    console.log(this.imgUrl);
  }
  public getUrl(i: number): void {
    let list = [`/static/index/14.png`, `/static/index/16.png`, `/static/index/18.png`];
    console.log('i :>> ', i, list[i]);
    this.imgUrl = list[i];
    // odiv.style.backgroundImage="url('mytest/demo/mybg.png')"
  }
  public start(): void {
    console.log('start! :>> ');
  }
  public handleRemove(file: any, fileList: any): void {
    console.log(file, fileList);
  }
  public handlePreview(file: any): void {
    console.log(file);
  }
  public handleExceed(files: any, fileList: any): void {
    this.$message.warning(
      `当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
        files.length + fileList.length
      } 个文件`,
    );
  }
  public beforeUpoad(file: any) {
    // const isJPG = file.type === 'image/jpeg';
    const isLt2M = file.size / 1024 / 1024 < 2;
    // if (!isJPG) {
    //     this.$message.error('上传头像图片只能是 JPG 格式!');
    // }
    if (!isLt2M) {
      this.$message.error('上传头像图片大小不能超过 2MB!');
    }
    // return isJPG && isLt2M;
    return isLt2M;
  }
  public handleSuccess(file: any, fileList: any) {
    console.log('上传成功');
  }
  public handleChange(file: any, fileList: any) {
    console.log('文件变化了');
  }
}
