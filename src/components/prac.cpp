#include<bits/stdc++.h>
using namespace std;
#define int long long int
#define endl '\n'
#define tc int t; cin>>t; while(t--)
#define abhi0825 ios_base::sync_with_stdio(false); cin.tie(NULL);
#define loop(i,a,b) for(int i=a;i<b;i++)
#define pb push_back
#define mp make_pair
#define F first
#define S second
#define MOD 1000000007
#define vi vector<int>
#define sortar(a) sort(a,a+n)
#define sortvec(a) sort(a.begin(),a.end())
#define suma(a) accumulate(a,a+n,0)
#define mina(a) *min_element(a,a+n)
#define maxa(a) *max_element(a,a+n)
#define msi map<string,int>
#define mii map<int,int>
#define pii pair<int,int>
#define set set<int>
#define inf 1e17
signed main()
{
    abhi0825
    tc
    {
        int n;
        cin>>n;
        int mat[n][5];
        for(int i=0;i<n;i++)
        {
            for(int j=0;j<5;j++)
            {
                cin>>mat[i][j];
            }
        }
        int flag=0;
        for(int i=0;i<5;i++)
        {
            for(int j=i+1;j<5;j++)
            {
                int one=0,two=0,both=0;
                for(int k=0;k<n;k++)
                {
                    if(mat[k][i] and mat[k][j])
                    {
                        both++;
                    }
                    else
                    if(mat[k][j])
                    {
                        two++;
                    }
                    else if(mat[k][i])
                    {
                        one++;
                    }
                }
                if(one+two+both==n and one<=n/2 and two<=n/2)
                {
                    flag=1;
                }
            }
        }
        if(flag) cout<<"YES\n";
        else cout<<"NO\n";
    }

}
