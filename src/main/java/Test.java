import java.util.Scanner;

/**
 * Created by profa on 2017-02-17.
 */
public class Test {

    public static void main(String args[]){
        Scanner scan = new Scanner(System.in);
        int arrPrime[] = new int[15];
        int cnt = 0;
            boolean flag = false;

            for(int j=2 ; j<=1000; j++){

                for (int i=2; i<j-1; i++){
                    if(j%i == 0){
                        flag = true;
                        break;
                    }
                }
                if(!flag){

                    if(cnt < 15)
                        arrPrime[cnt] = j;
                    else{
                        break;
                    }
                    cnt++;
                }else{
                    flag = false;
                }

            }

            for(int i=0; i<15; i++){
                System.out.print(arrPrime[i]);
                if(i+1 < 15){
                    System.out.print(",");
                }
            }



    }
}
