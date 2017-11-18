package react;

import android.app.Application;

import com.example.ttlock.MyApplication;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by ryan on 11/14/17.
 */

public class TTLockReactModule extends ReactContextBaseJavaModule {

    private MyApplication mApplication;

    public TTLockReactModule(ReactApplicationContext reactContext, Application application) {
        super(reactContext);
        mApplication = (MyApplication)application;
    }

    @Override
    public String getName() {
        return "TTLockModule";
    }

    @ReactMethod
    public void getString(Callback cb) {
        cb.invoke(321);
    }
}
